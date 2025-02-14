import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const Noteschema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
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
const Note = mongoose.model("notes", Noteschema);

export default Note;
