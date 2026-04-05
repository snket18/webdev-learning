// intiating the express library and assigns app variable to it
const mongoose = require ("mongoose");



// adding schema to databases 
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const user = new Schema ({
     email : String,
     password : String,
     name : String
});

const todo = new Schema ({
    title : String,
    done : Boolean,
    userId : ObjectId

})


const Usermodel = mongoose.model('user',user); // kuthun kuth data takaycha ahe thats it 
const Todomodel = mongoose.model('todos',todo);


module.exports = {
    Usermodel : Usermodel,
    Todomodel : Todomodel
}




