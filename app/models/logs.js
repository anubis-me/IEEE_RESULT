var mongoose = require('mongoose');            // Import Mongoose Package
var Schema   = mongoose.Schema;                // Assign Mongoose Schema function to variable
var titlize  = require('mongoose-title-case'); // Import Mongoose Title Case Plugin

// Wish Mongoose Schema
var logSchema = new Schema({
    regnum     : { type: String, required: true},
    time: {type: Date, required: true, default: Date.now()}
});


module.exports = mongoose.model('log', logSchema);