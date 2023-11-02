const mongoose = require('mongoose');
const Form=require('../Backend/Models/adminModel')

mongoose.connect('mongodb://localhost:27017/googleforms', { useNewUrlParser: true, useUnifiedTopology: true });

const seedForms = async () => {
  await Form.updateMany({}, { $set: { answer: '', options: [] } });

  console.log('Forms seeded successfully');
  mongoose.connection.close();
};

seedForms();
