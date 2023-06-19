// Define an array to hold various accommodation options
export const accommodationOptions = [
  // Each object in the array represents a single accommodation option
  {
    name: "House", // The type of accommodation
    listingName: "Family Home - Stylish Sanctuary", // The name or title of the listing (not present in all objects)
    location: "Auckland", // The city where the accommodation is located
    cost: 240, // The cost per night of the accommodation
    minPeople: 1, // The minimum number of people the accommodation can host
    maxPeople: 5, // The maximum number of people the accommodation can host
    minDays: 2, // The minimum number of days the accommodation can be booked for
    maxDays: 15, // The maximum number of days the accommodation can be booked for
    image: "img/auckHouse.jpeg", // The path to an image of the accommodation (not present in all objects)
    address: "45 Hanene Street, St Heliers, Auckland 1071", // The physical address of the accommodation (not present in all objects)
    latitude: "-36.851810", // The latitude coordinate of the accommodation (not present in all objects)
    longitude: "174.849200", // The longitude coordinate of the accommodation (not present in all objects)
  },
  // Additional accommodation options follow, each represented by an object in the array...
  {
    name: "Hotel",
    location: "Auckland",
    cost: 157,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
    image: "img/auckHotel.webp",
  },
  {
    name: "Hostel",
    location: "Auckland",
    cost: 30,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
    image: "img/auckHostel.jpg",
  },
  {
    name: "Motel",
    location: "Auckland",
    cost: 90,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
    image: "img/auckHouse.jpeg",
  },
  {
    name: "House",
    location: "Wellington",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Wellington",
    cost: 150,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Wellington",
    cost: 28,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Wellington",
    cost: 85,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Christchurch",
    cost: 230,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Christchurch",
    cost: 145,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Christchurch",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Christchurch",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Queenstown",
    cost: 250,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Queenstown",
    cost: 160,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Queenstown",
    cost: 35,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Queenstown",
    cost: 95,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Rotorua",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Rotorua",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Rotorua",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Rotorua",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Napier",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Napier",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Napier",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Napier",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Hamilton",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Hamilton",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Hamilton",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Hamilton",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Tauranga",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Tauranga",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Tauranga",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Tauranga",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Dunedin",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Dunedin",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Dunedin",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Dunedin",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Palmerston North",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Palmerston North",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Palmerston North",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Palmerston North",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Nelson",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Nelson",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Nelson",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Nelson",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "New Plymouth",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "New Plymouth",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "New Plymouth",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "New Plymouth",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Whangarei",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Whangarei",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Whangarei",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Whangarei",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Invercargill",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Invercargill",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Invercargill",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Invercargill",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Whanganui",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Whanganui",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Whanganui",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Whanganui",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Gisborne",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Gisborne",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Gisborne",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Gisborne",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Blenheim",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Blenheim",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Blenheim",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Blenheim",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Taupo",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Taupo",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Taupo",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Taupo",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Timaru",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Timaru",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Timaru",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Timaru",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Porirua",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Porirua",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Porirua",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Porirua",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Coromandel",
    cost: 210,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Coromandel",
    cost: 130,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Coromandel",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Coromandel",
    cost: 75,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
  {
    name: "House",
    location: "Masterton",
    cost: 220,
    minPeople: 1,
    maxPeople: 5,
    minDays: 2,
    maxDays: 15,
  },
  {
    name: "Hotel",
    location: "Masterton",
    cost: 140,
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 5,
  },
  {
    name: "Hostel",
    location: "Masterton",
    cost: 25,
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 10,
  },
  {
    name: "Motel",
    location: "Masterton",
    cost: 80,
    minPeople: 2,
    maxPeople: 4,
    minDays: 3,
    maxDays: 10,
  },
];
