const tasksModel = require('../models/tasksModel');

exports.getAllTasks = async (req, res) => {
  try {
    const notes = await tasksModel.getAll();
    res.render('layout/main', {
      pageTitle: 'Página Inicial',
      content: '../pages/notes',
      notes
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};