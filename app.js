const express = require('express')

const app = express()

app.get('/residents', (_, res) => {
  res.status(200).json(residents)
})

app.listen(8080)

const residents = [
  {
    name: 'Zach',
    age: 31,
    type: 'person'
  },
  {
    name: 'Gabi',
    age: 31,
    type: 'person'
  },
  {
    name: 'Tux',
    age: 6,
    type: 'cat'
  },
  {
    name: 'Cleopatra',
    age: 1,
    type: 'cat'
  }
]
