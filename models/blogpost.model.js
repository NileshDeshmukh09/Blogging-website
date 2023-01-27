/**
* Schema for the user Model will be provided Here
*/

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    title: { 
        type: String, 
        required: true
    },

    content: { 
        type: String, 
        required: true
    },

    author: { 
        type: String, 
    },

    likes: { 
        type: Number, 
        default: 0 
    },

    dislikes: { 
        type: Number, 
        default: 0 
    },


});

/* These will automatically generates the created and updated fields */
postSchema.set('timestamps' , true);

module.exports  = mongoose.model('Post', postSchema);