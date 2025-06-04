const loginModel = require('../models/loginModels'); 
const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body; 
        const result = await loginModel.login(email, password);
        if (result.success){
            req.session.authenticated = true; 
            console.log(result.userId);
            req.session.userId = result.user; 
            res.redirect('/home') 
        }
        else 
        {
            res.redirect('/login?error=1');
        }
    }
};


module.exports = loginController;