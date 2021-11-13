const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('MERN Twitter by Emmay and Victor!'));

// change this port later to run on Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
