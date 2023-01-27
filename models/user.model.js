/**
* Schema for the user Model will be provided Here
*/

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    userID :{
        type : String,
        required : true,
        unique : true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    bio : {
        type : String , 
        default : "Hey , I'm there on Blogging",
    },

    posts : { 
        type: [mongoose.SchemaTypes.ObjectId], 
        ref: 'Post'  /* Collection Name */
        /* One to Many Relationship between the Ticket's and the User */

    },


});

/* These will automatically generates the created and updated fields */
userSchema.set('timestamps' , true);

module.exports  = mongoose.model('User', userSchema);