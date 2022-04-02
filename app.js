const express = require('express')

const app = express()

app.get('/residents', (_, res) => {
  res.status(200).json(residents)
})

const port = process.env.PORT || 8080
app.listen(8080, () => console.log(`Ready at: http://localhost:${port}`))

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
