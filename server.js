import express from 'express'
import { Liquid } from 'liquidjs'

const app = express()
app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')

// Nodig voor POST-body uitlezen
app.use(express.urlencoded({ extended: true }))

// Cataloguspagina
app.get('/', async function (request, response) {
  const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview')
  const catalogusPageJSON = await catalogusPage.json()

  response.render('catalogus.liquid', { algemeen: catalogusPageJSON })
})

// Zoekfunctionaliteit
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

// Detailpagina + ophalen reacties
app.get('/detail/:id', async function (req, res) {
  const id = req.params.id

  try {
    const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview')
    const catalogusPageJSON = await catalogusPage.json()

    const detailPage = await fetch(`https://efm-student-case-proxy-api.vercel.app/detail/${id}`)
    const detailPageJSON = await detailPage.json()

    const messages = await fetch(`https://fdnd.directus.app/items/messages?filter={"for":{"_eq":"boek_${id}"}}`)
    const messagesJSON = await messages.json()

    res.render('detail.liquid', {
      detail: detailPageJSON,
      algemeen: catalogusPageJSON,
      messages: messagesJSON.data
    })
  } catch (error) {
    console.error('Error in /detail/:id route:', error.message)
    res.status(404).send('Detailboek niet gevonden')
  }
})

// Reactie versturen
app.post('/detail/:id', async function (req, res) {
  const id = req.params.id
  const { reactie } = req.body

  try {
    await fetch('https://fdnd.directus.app/items/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        for: `boek_${id}`,
        text: reactie
      })
    })

    res.redirect(303, `/detail/${id}`)
  } catch (error) {
    console.error('Fout bij versturen reactie:', error.message)
    res.status(500).send('Er ging iets mis bij het versturen van je reactie.')
  }
})

// 404 fallback
app.use(function (req, res) {
  res.status(404).render('404.liquid')
})

// Start de server
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
