const validator = require('validator');
let User = require("../../models/users/user.model");  

exports.login = (req, res) => {
    if(req.session.userData)
    {
        //res.send("You are already Loged IN");
        res.redirect(adminUrl + "dashboard");
    }
    else{
        res.render( adminPath + "login");
    }
};

exports.loginNow = (req, res) => {
    email = req.body.email;
    password = req.body.password;

    isEmail = validator.isEmail(req.body.email);
    
    if(isEmail)
    {
        //res.send(req.body);        
        var userDetail = User.getUser(req.body).then((userDetail) => {
            req.session.userData = userDetail;
            res.redirect(adminUrl + 'dashboard');
        }).catch(() => {
            res.send("Error in catch statement.");
        });
        
    }
    else{
        res.send("Error ");
    }
};

exports.register = (req, res) => {
    res.render( adminPath + "register");
};

exports.logout = (req, res) => {
    if(req.session.userData)
    {
        req.session.destroy();
        res.redirect( adminUrl + "login");
    }
    else{
        res.redirect( adminUrl + "login");
    }
};

exports.dashboard = (req, res) => {
    if(req.session.userData) {        
        res.render(adminPath + "dashboard");
    }
    else{
        res.redirect(adminUrl + "login");
    }
};