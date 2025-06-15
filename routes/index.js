const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');
const loginController = require('../controllers/loginController');


router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

router.post('/login', loginController.login);

router.get('/notes', TarefaController.getAllTasks);

router.get('/api/user', (req, res) => {
    res.json({ name: req.session.userName || 'Usuário' });
});

module.exports = router;