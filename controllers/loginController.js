const loginModel = require('../models/loginModel'); 
const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body; 
        const result = await loginModel.login(email, password);
        if (result.success){
            req.session.authenticated = true; 
            console.log(result.userId);
            req.session.userId = result.user; 
            res.redirect('/home');
        }
        else 
        {
            res.redirect('/?error=1');
        }
    }
};


module.exports = loginController;