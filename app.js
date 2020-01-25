// ----------------Require Express
const express = require('express');

// ----------------We create our own server named app
// ----Express server handling requests and responses
const app = express();

// ----------------Make everything inside of public/ available
app.use(express.static('public'));

// ----------------Our first Route
//-----Initial route
// app.get('/home', (request, response, next) => {
//   console.log(request);
//   response.send('<h1>Welcome Ironhacker. :)</h1>')''
// });
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// ----------------Create a new route
// -----Route without separation of HTML
// app.get('/cat', (request, response, next) => {
//   response.send(`
//     <!doctype html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <title>Cat</title>
//         <link rel="stylesheet" href="/stylesheets/style.css" />
//       </head>
//       <body>
//         <h1>Cat</h1>
//         <p>This is my second route</p>
//         <img src="/images/cool-cat.jpg" />
//       </body>
//     </html>
//   `);
// });

// -------Cat route (with separation of HTML)
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));

// ----------------Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));