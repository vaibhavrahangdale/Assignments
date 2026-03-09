interface PersonData {
  temperature: number;
  hasPlacedOrder: boolean;
  phoneNumber: string;
  bankBalance: number;
  email: string;
  coordinates: [number, number];
  maritalStatus: boolean;
  occupation: string;
  favouriteColor: string;
  currentYear: number;
  followers: number;
  movieRating: number;
  bloodType: string;
  bookTitle: string;
  numberOfEmployees: number;
  eventTime: string;
  countryName: string;
  eyeColor: string;
  birthPlace: string;
  distanceBetweenCities: number;
};

let data: PersonData = {
  temperature: 25.5,
  hasPlacedOrder: true,
  phoneNumber: "123-456-7890",
  bankBalance: 1000.5,
  email: "john.doe@example.com",
  coordinates: [37.7749, -122.4194],
  maritalStatus: false,
  occupation: "Software Engineer",
  favouriteColor: "Blue",
  currentYear: 2023,
  followers: 1000000,
  movieRating: 7.5,
  bloodType: "A",
  bookTitle: "To Kill a Mockingbird",
  numberOfEmployees: 500,
  eventTime: "2:30 PM",
  countryName: "United States",
  eyeColor: "Brown",
  birthPlace: "New York City",
  distanceBetweenCities: 200.5
};

console.log(data);