import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let NoteSchema = new Schema({
  content: {
    type: String
  },
  isSecret: {
    type: Boolean,
    default: true
  },
  cntxId:{
    type: String
  },
  ts:{
    type: Date
  }
});

module.exports = mongoose.model('Note', NoteSchema);