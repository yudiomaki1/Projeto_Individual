const express = require('express');
const router = express.Router();
const path = require('path');
let fetch;
(async () => {
  fetch = (await import('node-fetch')).default;
})();

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

router.get('/notes', async (req, res) => {
  const apiResponse = await fetch('http://localhost:3000/tarefas')
  return apiResponse.json().then(notes => {
  
  res.render('layout/main', {
    pageTitle: 'Página Inicial',
    content: '../pages/notes',
    notes,
  });
})
});

// Roteamento para páginas dinâmicas
router.get('/createTask', (req, res) => {
  res.render('layout/main', {
    pageTitle: 'Criar Tarefa',
    content: '../pages/CreateTask'
  });
});

module.exports = router;
