const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000 ;
require('dotenv/config')

//Import Routes
const getsRoute = require('./routes/gets');
const postsRoute = require('./routes/posts');
const deletesRoute = require('./routes/deletes');

app.use(bodyParser.json());
app.use(cors());
app.use('/gets', getsRoute);
app.use('/posts', postsRoute);
app.use('/deletes', deletesRoute);


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
console.log('MongoDB database connection established successsfully')
);


app.listen(PORT, function() {
    console.log('Server is running in Port: ' + PORT);
});