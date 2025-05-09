const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', (req, res) => {
  res.sendStatus(404);
});

app.use(express.static('public'));

// Route handlers
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/administrator', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'administrator.html'));
});

app.get('/done', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'done.html'));
});

app.get('/flag', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'flag.html'));
});

app.get('/sitemap', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.html'));
});

app.get('/trap', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'trap.html'));
});

app.get('/testing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'testing.html'));
});

app.get('/workshop', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'workshop.html'));
});

app.get('/zip', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'zip.html'));
});

app.get('/zipfiles', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'zipfiles.html'));
});

app.get('/webmaster', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'webmaster.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
