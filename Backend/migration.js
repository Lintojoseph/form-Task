const mongoose = require('mongoose');
const Form=require('../Backend/Models/adminModel')

mongoose.connect('mongodb://localhost:27017/googleforms', { useNewUrlParser: true, useUnifiedTopology: true });

const createForms = async () => {
  await Form.create([
    { question: 'What is your name?', answer: '' },
    { question: 'what is your age?', answer: '' },
    {question: 'Please mention your gender?', answer: '' }
    
  ]);

  console.log('Forms created successfully');
  mongoose.connection.close();
};

createForms();
