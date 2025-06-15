const tasksModel = require('../models/tasksModel');

exports.getAllTasks = async (req, res) => {
    try {
        const notes = await tasksModel.getAll();
        res.render('layout/main', {
            pageTitle: 'Anotações',
            content: '../pages/notes',
            notes
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar tarefa
exports.criarTarefa = async (req, res) => {
    console.log(req.body); 
    const { title, description, user_id, category_id, due_date } = req.body;
    try {
        await tasksModel.create(title, description, user_id, category_id, due_date);
        res.redirect('/notes');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
    try {
        const tasks = await tasksModel.getAll();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Buscar tarefa por ID
exports.buscarTarefaPorId = async (req, res) => {
    try {
        const task = await tasksModel.getById(req.params.id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Atualizar tarefa
exports.editarTarefa = async (req, res) => {
    try {
        const updatedTask = await tasksModel.update(req.params.id, req.body);
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Excluir tarefa
exports.excluirTarefa = async (req, res) => {
    try {
        await tasksModel.delete(req.params.id);
        res.redirect('/notes');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

