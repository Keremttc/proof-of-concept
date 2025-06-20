
# 💻 Tech Stack:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) ![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white)

## 📚 Embassy of the Free Mind – Digitale Catalogus
In opdracht van IO Digital heb ik een nieuwe online cataloguspagina ontworpen en ontwikkeld voor het museum Embassy of the Free Mind. Dit bijzondere museum stelt historische boeken en afbeeldingen tentoon, waarvan sommige meer dan 2000 jaar oud zijn.

## 🎯 Doel van het project
Het doel was om een gebruiksvriendelijke en toegankelijke digitale catalogus te realiseren waarin bezoekers eenvoudig boeken kunnen doorzoeken en basisinformatie kunnen bekijken. Daarnaast is er een detailpagina ontworpen waar bezoekers verdiepende informatie over elk boek kunnen vinden, inclusief de mogelijkheid om door de inhoud van het boek te bladeren.

🧠 Ontwerpkeuzes & Inspiratie
Bij het ontwerpen van de catalogus heb ik bewust gekozen om bij elk boek een afbeelding van de cover te tonen. Visuele elementen maken de ervaring rijker en helpen gebruikers sneller boeken te herkennen of selecteren – een functie die ik als waardevol voor de eindgebruiker beschouw.

De visuele stijl van het project is gebaseerd op de huidige huisstijl van Embassy of the Free Mind, waarbij blauw en goud als hoofdkleuren zijn gebruikt. Deze kleuren zorgen voor herkenning en geven het geheel een klassieke, maar toegankelijke uitstraling die past bij het erfgoed van het museum.

De responsieve layout is zorgvuldig afgestemd op verschillende schermformaten:

📱 Op mobiel worden boeken onder elkaar getoond voor maximale leesbaarheid en gebruiksgemak.

💻 Op desktop worden twee boeken naast elkaar gepresenteerd, zodat de gebruiker efficiënt kan bladeren door de collectie.

Deze keuzes zijn gemaakt met het oog op gebruiksvriendelijkheid, consistentie met de bestaande branding en een prettige ervaring voor zowel mobiele als desktopgebruikers.

<img width="550" alt="Image" src="https://github.com/user-attachments/assets/a4b1f8a0-ae6b-455f-b250-1e85a2ccaa2a"/>

<img width="220" alt="Image" src="https://github.com/user-attachments/assets/1d277faa-f180-4086-a1c6-ff17ddab2a55"/>

## 📖 Detailpagina
Wanneer je op een boek in de catalogus klikt, word je doorgestuurd naar de detailpagina.
Op deze pagina vind je:

📚 Uitgebreide informatie over het geselecteerde boek (zoals titel, auteur, jaar en locatie)

💬 De mogelijkheid om een reactie achter te laten over het boek

🔄 Navigatieknoppen om door het boek te bladeren

Deze pagina geeft gebruikers een verdiepend inzicht in het boek en maakt interactie mogelijk.

💡 Ontwerpkeuzes
De pagina is ontworpen met een duidelijke hiërarchie en rust in de layout:

Op desktop staan het boek, de informatie en reacties naast elkaar, zodat alle belangrijke elementen direct zichtbaar zijn zonder te scrollen.

Het boekformaat is bewust beperkt gehouden, om te voorkomen dat het te dominant wordt of lastig leesbaar is.

Op mobiel is gekozen voor een layout waarbij het boek als eerste getoond wordt, omdat dit de kern is van de pagina. Daarna volgen de aanvullende gegevens en reacties. Zo komt de inhoud op een logische en gebruiksvriendelijke manier naar voren, passend bij het schermformaat.


https://github.com/user-attachments/assets/dfa55049-104d-4e0f-8db0-954203b11956

https://github.com/user-attachments/assets/92b33e11-a98b-4bf2-87c1-8d56b674558a

## 💻 Code & Data-verwerking
De server is opgezet met Node.js en Express, en verwerkt data via server-side rendering met Liquid.

### 🔄 Data ophalen & weergeven
In server.js wordt de data opgehaald en weergegeven met behulp van app.get() routes en fetch() om JSON-data uit een externe database op te halen.

💻 Code & Data-verwerking
De applicatie is opgebouwd met Node.js, Express.js en LiquidJS als template engine. Data wordt opgehaald via externe API's en dynamisch gerenderd in Liquid-templates. Hieronder een overzicht van hoe de dataflow werkt.
🔧 Setup

https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L1-L9

📚 Cataloguspagina
De hoofdpagina (/) toont een overzicht van alle boeken. De data wordt opgehaald uit een externe API en gerenderd met Liquid:

https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L15-L20

🔍 Zoekfunctionaliteit
Gebruikers kunnen boeken zoeken via een POST-formulier. De resultaten worden gefilterd op basis van de ingevoerde zoekterm:

https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L27-L37

📖 Detailpagina per boek
Bij het klikken op een boek word je doorgestuurd naar /detail/:id, waarbij het juiste boek wordt opgehaald met zijn ID. Ook worden eventuele reacties bij dat boek geladen.

https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L49-L62

💬 Reacties posten
Gebruikers kunnen via een formulier een reactie achterlaten, die met een POST-verzoek naar de Directus API wordt gestuurd:

https://github.com/Keremttc/proof-of-concept/blob/3ba5a10c27ad6b79d01e41f656915fa690673a70/server.js#L69-L91
