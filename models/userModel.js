const db = require('../config/db');

const userModel = {
  getAll: async () => {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  },
  getById: async (id) => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  },
  create: async (name, email, password) => {
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  },
  update: async (id, data) => {
    const { name, email } = data;
    const result = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  },
  delete: async (id) => {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = userModel;
