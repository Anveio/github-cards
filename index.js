const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});