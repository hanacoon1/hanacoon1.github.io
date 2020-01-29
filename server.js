const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage'
  });
});

app.get('/finie', (req, res) => {
  res.render('finie', {
    title: 'Finie UX'
  });
});

app.get('/trove-website', (req, res) => {
  res.render('trove-website', {
    title: 'Trove Website'
  });
});

app.get('/clinc-website', (req, res) => {
  res.render('clinc-website', {
    title: 'Clinc Website'
  });
});

app.get('/trove-app', (req, res) => {
  res.render('trove-app', {
    title: 'Trove App UX'
  });
});

app.get('/wavelink', (req, res) => {
  res.render('wavelink', {
    title: 'Wavelink UX'
  });
});

app.get('/cme-group', (req, res) => {
  res.render('cme-group', {
    title: 'CME Group'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});

app.get('/illustrations', (req, res) => {
  res.render('illustrations', {
    title: 'Illustrations'
  });
});

app.get('/visual-design', (req, res) => {
  res.render('visual-design', {
    title: 'Visual Design'
  });
});

app.get('/the-arb', (req, res) => {
  res.render('the-arb', {
    title: 'The Arb'
  });
});

app.get('/1000-pitches', (req, res) => {
  res.render('1000-pitches', {
    title: '1000 Pitches'
  });
});

app.get('/mpowered', (req, res) => {
  res.render('mpowered', {
    title: 'MPowered'
  });
});

app.get('/insulearn', (req, res) => {
  res.render('insulearn', {
    title: 'Insulearn'
  });
});

app.get('/follow-the-money', (req, res) => {
  res.render('follow-the-money', {
    title: 'Follow The Money'
  });
});

app.get('/csdt', (req, res) => {
  res.render('csdt', {
    title: 'CSDT UX Research Project'
  });
});


app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});