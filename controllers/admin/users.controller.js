let User = require("../../models/users/user.model");

exports.users = (req, res) => {
    User.getUsers().then((users) => {
        res.render(adminPath + "users/list",{allUsers : users});
    }).catch(() => {
        res.send("Error to get users");
    });
}