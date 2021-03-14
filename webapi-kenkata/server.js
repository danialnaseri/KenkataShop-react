const http = require('http')
const port = process.env.PORT || 80
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'https://localhost:' + port

const mongoUri = ''

//starting server
http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))

mongodb
  .set('useCreateIndex', true)
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  })
  .then(() => console.log('MONGODB: Running'))
  .catch(error => console.log(error))
