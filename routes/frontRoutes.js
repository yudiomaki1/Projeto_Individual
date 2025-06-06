const express = require('express');
const router = express.Router();
const path = require('path');

// Roteamento para páginas dinâmicas
router.get('/', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Login',
    content: '../pages/login'
  });
});

router.get('/CreateAccount', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Criar Conta',
    content: '../pages/createAccount'
  });
});

router.get('/home', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Página Inicial',
    content: '../pages/home'
  });
});

router.get('/notes', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Página Inicial',
    content: '../pages/notes'
  });
});



module.exports = router;
