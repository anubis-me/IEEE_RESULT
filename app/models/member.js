var mongoose = require('mongoose');            // Import Mongoose Package
var Schema   = mongoose.Schema;                // Assign Mongoose Schema function to variable
var titlize  = require('mongoose-title-case'); // Import Mongoose Title Case Plugin



// Wish Mongoose Schema
var memberSchema = new Schema({
    mess       : { type: String, required: true },
    regnum     : { type: String, required: true }

});

// Mongoose Plugin to change fields to title case after saved to database (ensures consistency)
memberSchema.plugin(titlize, {
    paths: ['name']
});


module.exports = mongoose.model('member', memberSchema);