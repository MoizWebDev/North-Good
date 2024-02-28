const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
// Check if the model already exists, if not, define it
let PositionModel;
try {
    PositionModel = mongoose.model('position');
} catch (error) {
    console.log("Creating new 'position' model");
    PositionModel = mongoose.model('position', {
        title: String,
        location: String,
        responsibilities: String,
        qualifications: String,
        department: String,
        summary: String,
        link: String
    })
}

module.exports = PositionModel;
