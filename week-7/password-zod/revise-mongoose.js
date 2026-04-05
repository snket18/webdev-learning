const mongoose = require ("mongoose");
// let the user create schemas 

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// writing Schemas
const User = new Schema ({
    name : String,
    email: {type : String, unique : true } ,
    password : String

});

const Todo = new Schema ({
    userId : ObjectId,
    title : String,
    done : boolean

});

// creating models
const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('Todos',Todo);

module.exports = {
    UserModel,
    TodoModel
}