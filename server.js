require('dotenv').config();
const express = require('express');
const { initDb } = require('./lib/database');
const { getImages } = require('./lib/images');

const app = express();

app.get('/api/images', async (request, response) => {
  const images = await getImages();
  response.json(images);
});

initDb(process.env.MONGO_URL, process.env.DB_NAME).then(() => {
  console.log('DB initialized');
  app.listen(8080, () => {
    console.log('Server ready on http://localhost:8080');
  });
});
