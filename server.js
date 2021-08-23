// server.js
require('dotenv').config() // added
const express = require('express')
const cors = require('cors') // added

const connectDB = require('./config/db/')

const app = express()

// routes
const todo = require('./routers/todo') // todo

// connect database
connectDB() // added

// cors
app.use(cors({ origin: true, credentials: true })) // added

// iniitialize middleware
app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send('Server up and running'))

// use routes
app.use('/api/todo', todo) // added

// setting up port
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})
