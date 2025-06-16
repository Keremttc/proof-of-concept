import express from 'express'
import { Liquid } from 'liquidjs'

const app = express()
app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))

// Homepage / catalogus
app.get('/', async function (request, response) {
  const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview')
  const catalogusPageJSON = await catalogusPage.json()

  response.render('catalogus.liquid', { algemeen: catalogusPageJSON })
})

// Zoekfunctionaliteit via POST
app.post('/search', async function (req, res) {
  const zoekterm = req.body.zoekterm?.toLowerCase()

  try {
    const apiResponse = await fetch('https://efm-student-case-proxy-api.vercel.app/overview')
    const apiResponseJSON = await apiResponse.json()

    const filteredResults = apiResponseJSON.filter((item) =>
      item.title?.toLowerCase().includes(zoekterm)
    )

    res.render('catalogus.liquid', {
      algemeen: filteredResults,
      zoekterm: req.body.zoekterm
    })
  } catch (error) {
    console.error('Fout bij zoeken:', error.message)
    res.status(500).send('Zoeken is mislukt.')
  }
})

// Detailpagina
app.get('/detail/:id', async function (request, response) {
  try {
    const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview')
    const catalogusPageJSON = await catalogusPage.json()

    const detailPage = await fetch('https://efm-student-case-proxy-api.vercel.app/detail/' + request.params.id)
    const detailPageJSON = await detailPage.json()

    response.render('detail.liquid', {
      detail: detailPageJSON,
      algemeen: catalogusPageJSON
    })
  } catch (error) {
    console.error('Error in /detail/:id route:', error.message)
    response.status(404).send('Detailboek niet gevonden')
  }
})

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


