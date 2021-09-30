const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// WEB UI
app.get('/', (req, res) => {
  res.render('index')
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})