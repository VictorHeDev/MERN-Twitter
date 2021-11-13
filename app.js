const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const User = require('./models/User');

const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  const user = new User({
    handle: 'sunshinenim',
    email: 'sunshinenim@gmail.com',
    password: 'password'
  })
  user.save()
  res.send('Testing the best MERN Twitter by Emmay and Victor!')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/tweets', tweets);

// change this port later to run on Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
