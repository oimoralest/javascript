const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get(`${api}/`, (req, res) => {
	res.send('Welcome to the API');
});

app.listen(8080, () => {
	console.log(`API is running http://localhost:8080${api}`);
});
