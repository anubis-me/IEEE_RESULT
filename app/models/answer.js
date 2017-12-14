var mongoose = require('mongoose');            // Import Mongoose Package
var Schema   = mongoose.Schema;                // Assign Mongoose Schema function to variable
var titlize  = require('mongoose-title-case'); // Import Mongoose Title Case Plugin



// Wish Mongoose Schema
var answerSchema = new Schema({
    ans       : { type: String, required: true },
    name     : { type: String, required: true }

});

// Mongoose Plugin to change fields to title case after saved to database (ensures consistency)
answerSchema.plugin(titlize, {
    paths: ['name']
});


module.exports = mongoose.model('ans', answerSchema);
