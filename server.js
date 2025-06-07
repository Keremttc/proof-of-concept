import express from 'express'
import { Liquid } from 'liquidjs';

const app = express();
app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views');

app.use(express.urlencoded({extended: true}))


// or app.get('/catalogus') when there is a homepage
app.get('/', async function (request, response) { 

const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview');
const catalogusPageJSON = await catalogusPage.json();

response.render('catalogus.liquid', { algemeen: catalogusPageJSON });
});


app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})