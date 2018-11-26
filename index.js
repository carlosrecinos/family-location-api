const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./controllers/');
const { enableCors } = require('./services');

const port = 5000;

server.listen(process.env.PORT || port, (error) => {
  if(error){
    console.log('Error initializing server');
  }else{
    console.log('Server running on: ' + (process.env.PORT || port))
  }
})
app.use((req, res) => {
  console.log(req, res)
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(enableCors)
app.use('/api/',routes);

io.on('connection', (socket) => {

  socket.join('test', () => {
    const users = {};
    socket.on('disconnect', () => {
      delete users[socket.id];
      socket.broadcast.to('test').emit('newLocation', users);
    });
    socket.broadcast.to('test').emit('userJoined');    
    socket.on('newLocation', (data) => {
      users[socket.id] = {
        id: socket.id,
        name: data.device,
        location: data
      };
      socket.broadcast.to('test').emit('newLocation', users);
    })

  })

});










mongoose.connect('mongodb://admin:RRecinos2015@ds231991.mlab.com:31991/family-location');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected')
});
