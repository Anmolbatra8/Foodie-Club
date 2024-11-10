const userController = require("../Controllers/users.controller")

module.exports = (app) => {
    app.post('/signup',userController.signup);
    app.get('/users',userController.fetch);
    app.post('/login',userController.login);
    
}