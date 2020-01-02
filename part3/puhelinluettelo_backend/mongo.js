// Sandbox module to test MongoDB interaction

const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password, name, and number as arguments')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-cmru3.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema) // this will automatically create a 'people' collection

// Print out the contents of the database when no new data given
if ( process.argv.length<4 ){
  Number.find({}).then(result => {
    result.forEach(number => {
      console.log(number)
    })
    mongoose.connection.close()
    process.exit(1)
  })
}

const nameToAdd = process.argv[3]
const numberToAdd = process.argv[4]


const person = new Person({
  name: nameToAdd,
  number: numberToAdd
})

person.save().then(response => {
  let text = `Added ${nameToAdd} number ${numberToAdd} to phonebook`
  console.log(text);
  mongoose.connection.close();
})

// Person.find({}).then(result => {
//   result.forEach(person => {
//     console.log(person)
//   })
//   mongoose.connection.close()
// })
