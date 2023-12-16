const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaControllers = require('./controllers/mahasiswacontrollers.js');
const dosenControllers = require('./controllers/dosenControllers.js'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaControllers);
app.use('/dosen', dosenControllers);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});