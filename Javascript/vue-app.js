// Importing accommodation options from data.js
import { accommodationOptions } from "./data.js";
import { mealPlans } from "./data.js";

new Vue({
  el: "#app", // Mount Vue app on element with id "app"

  // Define initial data
  data: function () {
    return {
      step: 1,
      people: null,
      days: null,
      location: "",
      accommodation: null,
      selectedAccommodation: null,
      totalCost: null,
      selectedMeals: [],
      error: null,
    };
  },

  // Compute derived values from data
  computed: {
    uniqueMealOptions() {
      return [...new Set(mealPlans.map((plan) => plan.mealOption))];
    },

    totalMealCost() {
      if (this.selectedAccommodation && this.selectedMeals.length > 0) {
        let priceType;
        switch (this.selectedAccommodation.type) {
          case "House":
            priceType = "housePricePP";
            break;
          case "Hotel":
            priceType = "hotelPricePP";
            break;
          case "Motel":
            priceType = "motelPricePP";
            break;
          case "Hostel":
            priceType = "hostelPricePP";
            break;
          default:
            console.error(
              `Invalid accommodation type: ${this.selectedAccommodation.type}`
            );
            return 0;
        }
        console.log(`priceType: ${priceType}`);

        let totalCost = 0;
        for (let mealOption of this.selectedMeals) {
          let mealsForOption = mealPlans.filter(
            (plan) => plan.mealOption === mealOption
          );
          for (let meal of mealsForOption) {
            console.log(`meal[priceType]: ${meal[priceType]}`);
            console.log(`this.people: ${this.people}`);
            console.log(`this.days: ${this.days}`);
            totalCost += meal[priceType] * this.people * this.days;
            console.log(`totalCost: ${totalCost}`);
          }
        }

        return totalCost;
      }
      return 0;
    },

    // Get unique locations from accommodation options
    uniqueLocations() {
      return [
        ...new Set(accommodationOptions.map((option) => option.location)),
      ];
    },

    // Filter accommodation options based on selected location
    filteredAccommodationOptions() {
      return accommodationOptions.filter(
        (option) => option.location === this.location
      );
    },
  },

  methods: {
    // Transition effects for enter and leave
    enter(el, done) {
      TweenMax.fromTo(
        el,
        0.5,
        { opacity: 0 },
        { opacity: 1, onComplete: done }
      );
    },
    leave(el, done) {
      TweenMax.fromTo(
        el,
        0.5,
        { opacity: 1 },
        { opacity: 0, onComplete: done }
      );
    },

    mealSelection(value) {
      const index = this.selectedMeals.indexOf(value);

      if (index > -1) {
        this.selectedMeals.splice(index, 1);
      } else {
        this.selectedMeals.push(value);
      }
    },

    // Change step to next or previous
    nextStep() {
      this.error = null; // clear the error message

      if (this.step === 1 && !this.people) {
        this.error = "Please select a number of guests.";
        return;
      }

      if (this.step === 2 && !this.days) {
        this.error = "Please select a number of days for your stay.";
        return;
      }

      if (this.step === 3 && !this.location) {
        this.error = "Please select a location for your stay.";
        return;
      }

      if (this.step === 4 && !this.selectedMeals.length) {
        this.error = "Please select at least one meal type for your stay.";
        return;
      }
      // If everything is OK, move to the next step
      this.step += 1;
    },
    previousStep() {
      this.step -= 1;
    },

    // Select an accommodation option
    selectAccommodation(option) {
      this.selectedAccommodation = option;
    },

    // Filter accommodations based on number of people and days
    getAccommodations() {
      return this.filteredAccommodationOptions.filter(
        (option) =>
          this.people >= option.minPeople &&
          this.people <= option.maxPeople &&
          this.days >= option.minDays &&
          this.days <= option.maxDays
      );
    },

    // Create a map with accommodation details
    createMap() {
      // Set Mapbox access token
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZGVlcGFram9zaGlueiIsImEiOiJjbGoyZXUzeTAwdjR4M25sbGFmY2pud3F0In0.IF95gpfqzUq2IL9g3YSfUQ";

      // Set GeoJSON for accommodation
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                this.selectedAccommodation.latitude,
                this.selectedAccommodation.longitude,
              ],
            },
            properties: {
              title: this.selectedAccommodation.listingName,
              description: this.selectedAccommodation.address,
            },
          },
        ],
      };

      // Create new Mapbox map
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [
          this.selectedAccommodation.longitude,
          this.selectedAccommodation.latitude,
        ],
        zoom: 11,
      });

      // Add accommodation to map on load
      map.on("load", () => {
        map.addSource("accommodation", {
          type: "geojson",
          data: geojson,
        });

        // Load marker image and add to map
        map.loadImage(
          "/img/mapbox/mapbox-marker-icon-20px-green.png",
          (error, image) => {
            if (error) throw error;
            map.addImage("custom-marker", image);
            map.addLayer({
              id: "points",
              type: "symbol",
              source: "accommodation",
              layout: {
                "icon-image": "custom-marker",
                "icon-size": 1.5,
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
              },
            });
          }
        );
      });
    },

    // Close modal
    closeModal() {
      console.log("Closing modal");
      this.selectedAccommodation = null; // Assuming this would close your modal
    },
  },

  // Watch for changes in selected accommodation
  watch: {
    selectedAccommodation() {
      this.$nextTick(() => {
        this.createMap();
      });
    },
  },
});
