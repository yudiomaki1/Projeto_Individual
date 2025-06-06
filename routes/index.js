// routes/index.js
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');
const loginController = require('../controllers/loginController');
const tasksController = require('../controllers/tasksController');

// Rotas para o CRUD de tarefas
router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

router.post('/login', loginController.login);

router.get('/notes', tasksController.getAllTasks);

module.exports = router;