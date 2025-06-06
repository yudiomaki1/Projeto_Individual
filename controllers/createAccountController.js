const userService = require('../services/userService'); 
const CreateAccountController = {
    createAccount: async (req, res) => {
        const { name, email, password } = req.body; 
        const result = await userService.createAccount(name, email, password);
        if (result.success){
            req.session.authenticated = true; 
            console.log(result.userId);
            req.session.userId = result.user; 
            res.redirect('/');
        }
        else 
        {
            res.redirect('/CreateAccount?error=1');
        }
    }
};


module.exports = CreateAccountController