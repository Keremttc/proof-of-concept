

# 📚 Embassy of the Free Mind – Digitale Catalogus

In opdracht van **IO Digital** heb ik een nieuwe online cataloguspagina ontworpen en ontwikkeld voor het museum **Embassy of the Free Mind**. Dit bijzondere museum stelt historische boeken en afbeeldingen tentoon, waarvan sommige meer dan 2000 jaar oud zijn.

---

## 💻 Tech Stack:

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge\&logo=css3\&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge\&logo=html5\&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge\&logo=javascript\&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge\&logo=express\&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge\&logo=render\&logoColor=white)
![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge\&logo=directus\&logoColor=white)

---

## 🎯 Doel van het project

Het doel was om een gebruiksvriendelijke en toegankelijke digitale catalogus te realiseren waarin bezoekers eenvoudig boeken kunnen doorzoeken en basisinformatie kunnen bekijken. Daarnaast is er een detailpagina ontworpen waar bezoekers verdiepende informatie over elk boek kunnen vinden, inclusief de mogelijkheid om door de inhoud van het boek te bladeren.

---

## 🧠 Ontwerpkeuzes & Inspiratie

Bij het ontwerpen van de catalogus heb ik bewust gekozen om bij elk boek een afbeelding van de cover te tonen. Visuele elementen maken de ervaring rijker en helpen gebruikers sneller boeken te herkennen of selecteren – een functie die ik als waardevol voor de eindgebruiker beschouw.

De visuele stijl van het project is gebaseerd op de huidige huisstijl van Embassy of the Free Mind, waarbij blauw en goud als hoofdkleuren zijn gebruikt. Deze kleuren zorgen voor herkenning en geven het geheel een klassieke, maar toegankelijke uitstraling die past bij het erfgoed van het museum.

De responsieve layout is zorgvuldig afgestemd op verschillende schermformaten:

* 📱 Op mobiel worden boeken onder elkaar getoond voor maximale leesbaarheid en gebruiksgemak.
* 💻 Op desktop worden twee boeken naast elkaar gepresenteerd, zodat de gebruiker efficiënt kan bladeren door de collectie.

Deze keuzes zijn gemaakt met het oog op gebruiksvriendelijkheid, consistentie met de bestaande branding en een prettige ervaring voor zowel mobiele als desktopgebruikers.

---

<img width="550" alt="Image" src="https://github.com/user-attachments/assets/a4b1f8a0-ae6b-455f-b250-1e85a2ccaa2a"/>

<img width="220" alt="Image" src="https://github.com/user-attachments/assets/1d277faa-f180-4086-a1c6-ff17ddab2a55"/>

---

## 📖 Detailpagina

Wanneer je op een boek in de catalogus klikt, word je doorgestuurd naar de detailpagina. Op deze pagina vind je:

* 📚 Uitgebreide informatie over het geselecteerde boek (zoals titel, auteur, jaar en locatie)
* 💬 De mogelijkheid om een reactie achter te laten over het boek
* 🔄 Navigatieknoppen om door het boek te bladeren

De pagina geeft gebruikers een verdiepend inzicht in het boek en maakt interactie mogelijk.

### 💡 Ontwerpkeuzes

* Op **desktop** staan het boek, de informatie en reacties naast elkaar, zodat alle belangrijke elementen direct zichtbaar zijn zonder te scrollen.
* Het **boekformaat** is bewust beperkt gehouden, om te voorkomen dat het te dominant wordt of lastig leesbaar is.
* Op **mobiel** is gekozen voor een layout waarbij het boek als eerste getoond wordt, gevolgd door aanvullende gegevens en reacties.

---

[https://github.com/user-attachments/assets/dfa55049-104d-4e0f-8db0-954203b11956](https://github.com/user-attachments/assets/dfa55049-104d-4e0f-8db0-954203b11956)
[https://github.com/user-attachments/assets/92b33e11-a98b-4bf2-87c1-8d56b674558a](https://github.com/user-attachments/assets/92b33e11-a98b-4bf2-87c1-8d56b674558a)

---

## 💻 Code & Data-verwerking – `server.js`

De backend van deze applicatie is ontwikkeld met Node.js en Express.js. Voor het server-side renderen van HTML-pagina’s wordt gebruikgemaakt van LiquidJS, een krachtige template-engine die Liquid-syntax ondersteunt. Alle boek- en reactiegegevens worden opgehaald uit een externe Directus API.

Door de keuze voor server-side rendering is de pagina snel, SEO-vriendelijk en schaalbaar. Hieronder worden de belangrijkste routes uitgelegd.

### 🔄 Data ophalen & weergeven

De applicatie is opgebouwd met Node.js, Express.js en LiquidJS als template engine. Data wordt opgehaald via externe API's en dynamisch gerenderd in Liquid-templates. Hieronder een overzicht van hoe de dataflow werkt:

#### 🔧 Setup

- express: Start een nieuwe Express-applicatie.

- express.static('public'): Zorgt ervoor dat bestanden in de public-map (zoals CSS, JS, afbeeldingen) bereikbaar zijn voor de browser.

- LiquidJS: Wordt ingesteld als template engine. Hiermee kun je .liquid-bestanden gebruiken voor het dynamisch genereren van HTML-pagina's.

- app.engine('liquid', engine.express()): Registreert Liquid als rendering engine voor .liquid-bestanden.

- app.set('views', './views'): Geeft aan dat alle templates (bijv. detail.liquid) zich in de map ./views bevinden.

[https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L1-L9](https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L1-L9)

#### 📚 Cataloguspagina

Deze Express-route zorgt ervoor dat de homepage ( / ) de catalogus van boeken ophaalt en weergeeft. Toont een overzicht van alle boeken:

[https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L15-L20](https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L15-L20)

Wat gebeurt er hier?

- De server maakt verbinding met de Directus API en haalt alle boeken op.

- Deze worden als JSON-data doorgestuurd naar de template catalogus.liquid.

- Elk boek wordt weergegeven in een loop ({% for boek in algemeen %}).

- De gebruikers zien direct een overzicht van alle boeken bij het openen van de site.

#### 🔍 Zoekfunctionaliteit

Zoekformulier via POST-methode, met filtering op zoekterm:

[https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L27-L37](https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L27-L37)

Wat gebeurt er hier?

- De gebruiker vult een zoekterm in die via een POST-verzoek wordt doorgestuurd.

- Alle boeken worden opnieuw opgehaald van de API.

- Met filter() wordt gecontroleerd of titel of auteur overeenkomen met de zoekterm.

- Alleen de gefilterde boeken worden getoond in dezelfde catalogus-weergave.

#### 📖 Detailpagina

Toont detailweergave van geselecteerd boek + reacties:

[https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L49-L62](https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L49-L62)

Wat gebeurt er hier?

- De route /detail/:id toont  één specifiek boek.

- Het boek-ID wordt uit de URL gehaald via req.params.id.

- De bijbehorende boekgegevens worden opgehaald van een proxy-API (https://efm-student-case-proxy-api.vercel.app/detail/${id}), die waarschijnlijk data van Directus haalt, maar niet direct van Directus zelf.

- Daarnaast worden ook berichten opgehaald uit Directus (via https://fdnd.directus.app/items/messages), gelinkt aan dit boek.

- Al deze data wordt doorgestuurd naar de detail.liquid template, waar de pagina visueel wordt opgebouwd.

#### 💬 Reacties posten

Formulier verstuurt POST-verzoek naar Directus API. Deze route ontvangt een reactie via een POST-verzoek, stuurt deze reactie door naar de Directus API om op te slaan, en stuurt de gebruiker daarna terug naar de detailpagina van het betreffende boek.

[https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L69-L91](https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L69-L91)

Reacties plaatsen op een boek
Endpoint: POST /detail/:id
Deze route maakt het mogelijk dat gebruikers een reactie kunnen plaatsen bij een specifiek boek.

Werking: 

- URL-parameter: :id is het ID van het boek waarop gereageerd wordt.

- Verwachte input: het POST-verzoek bevat in de body een veld reactie met de tekst van de reactie.

  De server stuurt deze reactie door naar de Directus API, waarbij het bericht gekoppeld wordt aan het juiste boek (for: boek_<id>).

- Na succesvolle opslag wordt de gebruiker teruggestuurd naar de detailpagina van dat boek.

- Foutafhandeling. Bij een fout tijdens het versturen van de reactie ontvangt de gebruiker een foutmelding met statuscode 500.




---

## 🗂️ Structuur & Functionaliteit – `catalogus.liquid`

### 📚 Weergave van Boekenlijst

[https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/catalogus.liquid#L39-L54](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/catalogus.liquid#L39-L54)

**Werking:**

* `{% for %}`-loop toont elk boek uit de `algemeen`-variabele
* Elke kaart bevat een cover, titel, uitgever, jaar en plaats
* Lazy loading van afbeeldingen voor betere performance
* "Bekijk boek"-knop linkt naar `/detail/{{ data.id }}`

---

## ✨ Magnetische Hover Effecten op Knoppen

[https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/catalogus.liquid#L57-L81](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/catalogus.liquid#L57-L81)

**Werking:**

- Het mousemove-event zorgt ervoor dat de knop subtiel meebeweegt in de richting van de cursor, waardoor het lijkt alsof de knop de muis “aantrekt”.

- De scale(1.05) vergroot de knop licht (5%), wat een dynamisch en uitnodigend effect geeft.

- Het mouseleave-event reset de knop naar de oorspronkelijke positie en grootte, zodat alles weer netjes teruggaat.

- Dit alles zorgt voor visuele feedback aan de gebruiker en maakt de interface levendiger en interactiever.



---

## 🧾 Structuur & Functionaliteit – `detail.liquid`

### 📖 Boekinformatie

[https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L6-L22](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L6-L22)

Wat gebeurt hier?
De sectie heeft als label "Boek informatie" voor toegankelijkheid (aria-label).

- Eerst wordt de titel van het boek getoond. Als die ontbreekt, verschijnt de tekst "Geen titel beschikbaar".

- Daarna wordt een variabele md gemaakt als verkorte verwijzing naar detail.metadata (waar alle metadata over het boek in zit).

- Vervolgens worden diverse metadata-velden voorzichtig getoond, alleen als ze bestaan en een waarde hebben, bijvoorbeeld:

- Auteur (md[2])

- Jaar (md[4])

- Uitgave (md[3])

- UBN, Trefwoorden, Signatuur, Opmerkingen, Kopieën, etc.

- Elk veld krijgt een eigen <h2> kopje met daaronder een paragraaf met de waarde.


### 💬 Reactieformulier + Reacties

[https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L24-L43](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L24-L43)

Functionaliteit
Formulier om een reactie achter te laten:

- Gebruikers kunnen hun naam, e-mailadres en reactie invullen.

- Het formulier wordt via POST verzonden naar /detail/{{ detail.id }}, waarbij {{ detail.id }} dynamisch wordt vervangen door het huidige boek-ID.

- Alle velden zijn verplicht (required), wat zorgt voor basisvalidatie in de browser.

- Dankzij aria-live="polite" worden schermlezers geïnformeerd over updates, wat de toegankelijkheid verbetert.

Gebruikservaring
- Na het verzenden van een reactie wordt deze (via server-side verwerking) opgeslagen.

- Reacties kunnen met JavaScript asynchroon worden opgehaald en toegevoegd aan de lijst, zonder de pagina te vernieuwen.


### 📚 Boekencarrousel

[https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L49-L51](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L49-L51)

- De loop {% for asset in detail.assets %} gaat over alle afbeeldingen (assets) die bij het boek horen.

- Van elke afbeelding wordt het medium formaat (asset.medium) gebruikt als bron van de <img> tag.

- Elke afbeelding krijgt een alt-tekst “Boek afbeelding X”, waarbij X het volgnummer is van de afbeelding in de loop (forloop.index).

- De afbeeldingen krijgen de class slider-image, waarmee je ze kunt stylen of gebruiken in een slider/carrousel.


---

## ⚙️ JavaScript Functionaliteit

1. **Reacties ophalen:**

   [https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L72](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L72)

2. **Filteren op boek\_{{ detail.id }}:**

   [https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L107](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L107)

3. **Carrousel logica:**

   [https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L153-L155](https://github.com/Keremttc/proof-of-concept/blob/deb58afd5b8e2a225a5cbd82ed2fa34d63913876/views/detail.liquid#L153-L155)

**Waarom?**

* ✔️ Live reacties laden zonder refresh
* ✔️ Snelle en vloeiende gebruikerservaring
* ✔️ Volledig mobielvriendelijk
