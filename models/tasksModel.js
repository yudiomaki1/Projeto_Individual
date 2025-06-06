
const db = require('../config/db');

const tasksModel = {
    getAll: async () => {
        const result = await db.query('SELECT * FROM tasks WHERE id = $1', ['4bd89ffd-f039-40ad-88b7-d4ffcc5f36ae']);
        return result.rows;
    }
};

module.exports = tasksModel;