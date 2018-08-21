const mongDB = require("../../config/database");
const userSchema = require("./user.schema");
let mongoose = mongDB.mongoose;

var userModel = mongoose.model('Users', userSchema);

function create(data)
{
    userModel.create(data, (err, data) => {
        if(err)
        {
            return "Error in create a user!";
        }
        else{
            return data;
        }
    });
}

function getUsers()
{
    return new Promise(function(resolve, reject) {
        userModel.find((err, result) => {        
            if(err) {
                return reject(err);
            }
            else {            
                return resolve(result);         
            }
        });
    });
}

function getUser(data)
{
    return new Promise(function(resolve, reject) {
        userModel.findOne({email : data.email, password : data.password },(err, result) => {
            if(err)
            {
                return reject(err);
            }
            else{
                return resolve(result);
            }
        });
    });
}

module.exports = {
    create: create,
    getUsers: getUsers,
    getUser: getUser
};