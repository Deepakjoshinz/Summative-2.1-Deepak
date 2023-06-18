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
      // Get a list of unique locations from the accommodation options
      return [
        ...new Set(accommodationOptions.map((option) => option.location)),
      ];
    },
    filteredAccommodationOptions() {
      // Filter the accommodation options based on the selected location
      return accommodationOptions.filter(
        (option) => option.location === this.location
      );
    },
  },
  methods: {
    enter(el, done) {
      // Use the global TweenMax variable directly
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
      // TODO: Load map and points of interest
    },
    getAccommodations() {
      // Return all accommodation options that fit the user's needs
      return this.filteredAccommodationOptions.filter(
        (option) =>
          this.people >= option.minPeople &&
          this.people <= option.maxPeople &&
          this.days >= option.minDays &&
          this.days <= option.maxDays
      );
    },
  },
});
