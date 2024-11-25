
const express = require('express');

const app = express();

const port=process.env.PORT || 5051;
app.listen (port, () => console.log('node server started using nodemon') );