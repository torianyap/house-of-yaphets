if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const err_handler = require('./middlewares/err_handler')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.use(err_handler)

app.listen(PORT, () => console.log(`listening at port ${PORT}`))