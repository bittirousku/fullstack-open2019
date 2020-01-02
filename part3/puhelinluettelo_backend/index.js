// frontend:
// https://mysterious-waters-13484.herokuapp.com/
//
// backend:
// https://mysterious-waters-13484.herokuapp.com/api/persons
//
// See README.MD for more information


require('dotenv').config()  // parse .env file contents and set as env variables.
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')
const errorHandlers = require('./middleware/errorHandlers')


const app = express()


morgan.token(
  'body',
  (req, res)  => JSON.stringify(req.body)
)

// Middlewares. The order here is very important!
app.use(express.static('build'))  // serve frontend from backend root
app.use(bodyParser.json())
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.body(req, res)
  ].join(' ')
}))
app.use(cors())  // enable serving from 3001 to client on 3000


// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
  Person.countDocuments({}, (err, count) => {
    res.send(
      `<p>Phonebook has info for ${count} people</p>
      ${new Date()}
      `
    )
  })
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(people => {
    // res.json(people)
    res.json(people.map(person => person.toJSON()))  // what's the difference?
  })
})


app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note.toJSON())
      } else {  // Document not found
        response.status(404).end()
      }
    })
    .catch(error => next(error))  // pass the error to Express error handler middleware
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Example with curl
// curl -d '{"name": "kekkone", "number": "123"}' -H "Content-Type: application/json" -X POST localhost:3001/api/persons
app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'name is missing'
    })
  } else if (!body.number) {
    return response.status(400).json({
      error: 'number is missing'
    })
  }


  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then(savedPerson => {
      response.json(savedPerson.toJSON())
    })
    .catch(error => next(error))
})

// Update number
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  // NOTE: important to update with a plain object, not a Person object!
  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(result => {
      response.json(result.toJSON())
    })
    .catch(error => next(error))
})


// Error handler middleware, important to call last
app.use(errorHandlers.unknownEndpoint)
app.use(errorHandlers.errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
