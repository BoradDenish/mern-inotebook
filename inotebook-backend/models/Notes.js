import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const Noteschema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        unique: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("notes", Noteschema);
