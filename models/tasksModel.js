const db = require('../config/db');

const tasksModel = {
    getAll: async () => {
        const result = await db.query('SELECT * FROM tasks');
        return result.rows;
    },
    getById: async (id) => {
        const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);
        return result.rows[0];
    },
    create: async (title, description, user_id = null, category_id = null, due_date) => {
        const result = await db.query(
            'INSERT INTO tasks (title, description, user_id, category_id, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [title, description, user_id, category_id, due_date]
        );
        return result.rows[0];
    },
    update: async (id, data) => {
        const { title, description, category_id } = data;
        const result = await db.query(
            'UPDATE tasks SET title = $1, description = $2, category_id = $3 WHERE id = $4 RETURNING *',
            [title, description, category_id, id]
        );
        return result.rows[0];
    },
    delete: async (id) => {
        const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
};

module.exports = tasksModel;