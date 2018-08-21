const express = require("express");
const app = express();

const router = express.Router();

let ctrlLogin = require("./controllers/admin/login.controller");
let ctrlUsers = require("./controllers/admin/users.controller");

let checkIsLogedIn = (req , res, next ) => {
    if(req.session.userData)
    {
        next();
    }
    else{
        res.redirect( adminUrl + "login");
    }
   
};

router.get("/", ctrlLogin.login);
router.get("/login", ctrlLogin.login);

router.post("/", ctrlLogin.loginNow);
router.post("/login", ctrlLogin.loginNow);
router.get("/logout", ctrlLogin.logout);

router.get("/register", ctrlLogin.register);
router.get("/dashboard" , checkIsLogedIn, ctrlLogin.dashboard);

router.get("/users", checkIsLogedIn, ctrlUsers.users);
router.get("/users/add", checkIsLogedIn, ctrlUsers.users);

module.exports = router;