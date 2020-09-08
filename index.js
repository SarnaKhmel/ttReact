const express = require('express')
const mongoose = require('mongoose')
const exprshds = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exprshds.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start () {
  try {
    mongoose.connect('mongodb+srv://oleksa:qeqelock@cluster0.8ev4f.mongodb.net/todos', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log('db connected)')
    app.listen(PORT, () => {
      console.log('server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
