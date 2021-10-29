const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
//used to display static images starting with the folder /public
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 4000

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    

    const randomFortune = fortunes[Math.floor(Math.random()* fortunes.length)]
    const randomWord = word[Math.floor(Math.random()* word.length)]
    res.render('about', {getWord:randomWord} )
} )

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

// this is a test
const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]

const word = [
    "eat",
    "Rivers .",
    "fear",
    "pleasant surprise.",
    "keep it simple.",
]



app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))