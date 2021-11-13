const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('MERN Twitter by Emmay and Victor!'));
app.use('/api/users', users);
app.use('/api/tweets', tweets);

// change this port later to run on Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
