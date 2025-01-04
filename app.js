const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "public" directory
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

const touristSpots = [
  {
    id: 1,
    name: 'Penang Hill',
    description: 'A beautiful hilltop view',
    image: '/images/penang-hill.jpg',
  },
  {
    id: 2,
    name: 'George Town',
    description: 'Historical city center',
    image: '/images/george-town.jpg',
  },
  {
    id: 3,
    name: 'Kek Lok Si Temple',
    description: 'Largest Buddhist temple in Malaysia',
    image: '/images/kek-lok-si.jpg',
  },
  {
    id: 4,
    name: 'Penang National Park',
    description: 'A stunning park with hiking trails and beaches',
    image: '/images/penang-national-park.jpg',
  },
  {
    id: 5,
    name: 'Cheong Fatt Tze Mansion',
    description: 'A historic blue mansion with guided tours',
    image: '/images/cheong-fatt-tze.jpg',
  },
  {
    id: 6,
    name: 'Penang Peranakan Mansion',
    description: 'A museum showcasing Peranakan culture',
    image: '/images/peranakan-mansion.jpg',
  },
  {
    id: 7,
    name: 'Penang Butterfly Farm',
    description: 'A tropical garden with vibrant butterflies',
    image: '/images/butterfly-farm.jpg',
  },
  {
    id: 8,
    name: 'Fort Cornwallis',
    description: 'A historical landmark and fort in Penang',
    image: '/images/fort-cornwallis.jpg',
  },
];



const foodBeverages = [
  {
    id: 1,
    name: 'Char Kway Teow',
    description: 'A popular stir-fried noodle dish',
    image: '/images/char-kway-teow.jpg',
  },
  {
    id: 2,
    name: 'Penang Laksa',
    description: 'A sour and spicy noodle soup',
    image: '/images/penang-asam.jpg',
  },
  {
    id: 3,
    name: 'Nasi Kandar',
    description: 'A traditional Malaysian rice dish with curries',
    image: '/images/nasi-kandar.jpg',
  },
  {
    id: 4,
    name: 'Hokkien Mee',
    description: 'A flavorful prawn noodle soup',
    image: '/images/hokkien-mee.jpg',
  },
  {
    id: 5,
    name: 'Rojak',
    description: 'A Malaysian-style fruit and vegetable salad',
    image: '/images/rojak.jpg',
  },
  {
    id: 6,
    name: 'Cendol',
    description: 'A refreshing dessert with shaved ice, coconut milk, and palm sugar',
    image: '/images/cendol.jpg',
  },
  {
    id: 7,
    name: 'Oyster Omelette',
    description: 'A fried dish with eggs and oysters',
    image: '/images/oyster-omelette.jpg',
  },
  {
    id: 8,
    name: 'Apam Balik',
    description: 'A sweet pancake-like snack filled with peanuts and sugar',
    image: '/images/apam-balik.jpg',
  },
];


const hotels = [
  {
    id: 1,
    name: 'Hotel Jen Penang',
    description: 'A luxury hotel in the heart of Georgetown',
    image: '/images/hotel-jen.jpg',
  },
  {
    id: 2,
    name: 'Eastern & Oriental Hotel',
    description: 'A historic 5-star hotel overlooking the sea',
    image: '/images/eastern-oriental.jpg',
  },
  {
    id: 3,
    name: 'Bayview Hotel',
    description: 'A modern hotel with stunning views of the bay',
    image: '/images/bayview-hotel.jpg',
  },
  {
    id: 4,
    name: 'Lexis Suites Penang',
    description: 'A luxury suite hotel with private pools',
    image: '/images/lexis-suites.jpg',
  },
  {
    id: 5,
    name: 'Shangri-La’s Rasa Sayang Resort',
    description: 'A beachfront resort with lush gardens',
    image: '/images/rasa-sayang.jpg',
  },
  {
    id: 6,
    name: 'Hard Rock Hotel Penang',
    description: 'A rock-and-roll themed beachfront hotel',
    image: '/images/hard-rock.jpg',
  },
  {
    id: 7,
    name: 'The Prestige Hotel',
    description: 'A boutique luxury hotel in the heart of Penang',
    image: '/images/prestige-hotel.jpg',
  },
  {
    id: 8,
    name: 'G Hotel Gurney',
    description: 'A modern hotel with easy access to Gurney Plaza',
    image: '/images/g-hotel-gurney.jpg',
  },
];


// API Routes
app.get('/api/tourist-spots', (req, res) => {
  res.json(touristSpots);
});

app.get('/api/foodBeverages', (req, res) => {
  res.json(foodBeverages);
});

app.get('/api/hotels', (req, res) => {
  res.json(hotels);
});

// Serve React App
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
module.exports = app;
