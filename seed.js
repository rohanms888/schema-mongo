const mongoose = require('mongoose');
const { City, User } = require('./models');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

const cityData = [
  { name: 'New York', population: 8622698 },
  { name: 'Los Angeles', population: 3990456 },
  { name: 'Chicago', population: 2705994 },
];

City.insertMany(cityData)
  .then((cities) => {
    console.log(`${cities.length} cities added`);

    const userData = [
      { name: 'John Doe', email: 'john@example.com', city: cities[0]._id },
      { name: 'Jane Smith', email: 'jane@example.com', city: cities[1]._id },
      { name: 'Bob Johnson', email: 'bob@example.com', city: cities[2]._id },
    ];

    User.insertMany(userData)
      .then((users) => {
        console.log(`${users.length} users added`);
        mongoose.disconnect();
      })
      .catch((err) => console.error('Error adding users', err));
  })
  .catch((err) => console.error('Error adding cities', err));
