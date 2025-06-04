// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const frontRoutes = require('./routes/frontRoutes');
const indexRoutes = require('./routes/index');
const home = require('./routes/frontRoutes')
const path = require('path')

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', home)

app.use('/', indexRoutes);
app.use('/', frontRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});