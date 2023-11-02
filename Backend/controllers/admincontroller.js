const Form=require('../Backend/Models/adminModel')


app.get('/', async (req, res) => {
    try {
      const questions = await Form.find();
      res.json(questions);
    } catch (error) {
      console.error('Error fetching questions:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });