import { accommodationOptions } from "./data.js";

new Vue({
  el: "#app",
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
  computed: {
    uniqueLocations() {
      return [
        ...new Set(accommodationOptions.map((option) => option.location)),
      ];
    },
    filteredAccommodationOptions() {
      return accommodationOptions.filter(
        (option) => option.location === this.location
      );
    },
  },
  methods: {
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
    nextStep() {
      this.step++;
    },
    previousStep() {
      this.step--;
    },
    selectAccommodation(option) {
      this.selectedAccommodation = option;
    },
    getAccommodations() {
      return this.filteredAccommodationOptions.filter(
        (option) =>
          this.people >= option.minPeople &&
          this.people <= option.maxPeople &&
          this.days >= option.minDays &&
          this.days <= option.maxDays
      );
    },
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZGVlcGFram9zaGlueiIsImEiOiJjbGoyZXUzeTAwdjR4M25sbGFmY2pud3F0In0.IF95gpfqzUq2IL9g3YSfUQ";
      var geojson = {
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
              title: "Accomodation",
              description: this.selectAccommodation.location,
            },
          },
        ],
      };

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [
          this.selectedAccommodation.longitude,
          this.selectedAccommodation.latitude,
        ],
        zoom: 15,
      });
    },
    closeModal: function () {
      console.log("Closing modal");
      this.selectedAccommodation = null; // Assuming this would close your modal
    },
  },
  watch: {
    selectedAccommodation() {
      this.$nextTick(() => {
        this.createMap();
      });
    },
  },
});
