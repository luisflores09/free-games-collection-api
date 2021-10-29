const express = require('express');

const app = express();

require('dotenv').config();
const { PORT = 3001, DATABASE_URL } = process.env;

app.listen(PORT, () => console.log(`Express is listening on Port: ${PORT}`));
