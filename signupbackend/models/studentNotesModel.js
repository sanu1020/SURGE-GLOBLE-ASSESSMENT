const mongoose = require('mongoose')

const studentNotesModel =new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    notes:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('studentNotesTable',studentNotesModel)