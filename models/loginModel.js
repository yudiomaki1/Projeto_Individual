const db = require('../config/db');

const login = async (email, password) => {
    try {
        const result = await db.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );
        console.log(result.rows);
        if (result.rows.length === 0) {
            throw new Error('Usuário ou senha inválidos');
        }
        console.log('Login realizado com sucesso');
        return { success: true, user: result.rows[0].id}; 
    } catch (error) {
        console.log('Erro ao realizar login:', error);
        return { success: false, message: error.message};
    }
}

module.exports = {
    login
};