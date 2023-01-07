import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hi'
  })
})

app.post('/', async (req, res) => {
    try {
      const prompt = req.body.prompt;
  
  
      res.status(200).send({
        bot: response.data.choices[0].text
      });
  
    } catch (error) {
      console.error(error)
      res.status(500).send(error || 'Error');
    }
  })
  
  app.listen(5000, () => console.log('Server started on http://localhost:5000'))