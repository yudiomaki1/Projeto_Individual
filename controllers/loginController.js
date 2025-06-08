const loginModel = require('../models/loginModel'); 
const userService = require('../services/userService'); 

const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body; 
        const result = await loginModel.login(email, password);
        if (result.success){
            req.session.authenticated = true; 
            req.session.userId = result.user;
            const user = await userService.getUserById(result.user);
            req.session.userName = user.name;
            res.redirect('/home');
        }
        else 
        {
            res.redirect('/?error=1');
        }
    }
};

module.exports = loginController;