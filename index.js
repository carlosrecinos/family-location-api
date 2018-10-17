const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const routes = require('./controllers/')
const { enableCors } = require('./services') 

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(enableCors())
app.use('/api/',routes);
const port = 5000;
app.listen(process.env.PORT || port, (error) => {
  if(error){
    console.log('Error initializing server');
  }else{
    console.log('Server running on: ' + (process.env.PORT || port))
  }
})


mongoose.connect('mongodb://admin:RRecinos2015@ds231991.mlab.com:31991/family-location');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected')
});
