const pool = require('../config/db');


exports.criarTarefa = async (req, res) => {
  const { title, description, user_id, category_id } = req.body;
  const query = 'INSERT INTO tasks (title, description, user_id, category_id) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [title, description, user_id, category_id];

  try {
    await pool.query(query, values);
    res.redirect('/notes'); 
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ error: err.message });
  }
};

exports.listarTarefas = async (req, res) => {
  const query = 'SELECT * FROM tasks';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarTarefasPorId = async (req, res) => {
  const query = 'SELECT * FROM tasks WHERE id = $1';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

const query = `
  UPDATE tasks SET title = $1, description = $2
  WHERE id = $3 RETURNING *`;
const values = [title, description, id];


  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};