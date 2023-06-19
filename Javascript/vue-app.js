// Importing accommodation options from data.js
import { accommodationOptions } from "./data.js";

new Vue({
  el: "#app", // Mount Vue app on element with id "app"

  // Define initial data
  data: {
    step: 1,
    people: 1,
    days: "",
    location: "",
    accommodation: null,
    selectedAccommodation: null,
    totalCost: null,
    error: "",
  },

  // Compute derived values from data
  computed: {
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

    // Change step to next or previous
    nextStep() {
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
        zoom: 15,
      });

      // Add accommodation to map on load
      map.on("load", () => {
        map.addSource("accommodation", {
          type: "geojson",
          data: geojson,
        });

        // Load marker image and add to map
        map.loadImage(
          "/img/mapbox-marker-icon-20px-green.png",
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
