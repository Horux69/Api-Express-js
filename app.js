const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const coursesRoutes = require('./routes/courseRoutes');

const app = express();

app.use(express.json());

app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/cousers', require('./routes/courseRoutes'));

mongoose.connect('mongodb+srv://jccastillo116:tglgS8kOelWhfl6t@cluster0.kbdqdn7.mongodb.net/sena2023?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a mongo"))
  .catch((err) => { console.error("Error conectandose a mongoDB");
                    console.error(err);});

app.listen(3001, () => {
    console.log('Server Iniciado en el Puerto 3001');
});

module.exports = app;