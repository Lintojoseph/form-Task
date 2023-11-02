const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  question: String,
  type: {
    type: String,
    enum: ['radio', 'checkbox', 'shortanswer', 'others'],
  },
  options: [{ type: String }], // Add this field for options
  answer: { type: String, required: false },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
