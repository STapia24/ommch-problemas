const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000 ;
const path = require('path');
require('dotenv/config')

//Import Routes
const getsRoute = require('./routes/gets');
const postsRoute = require('./routes/posts');
const deletesRoute = require('./routes/deletes');
const { builtinModules } = require('node:module');

// Use Routes
app.use(bodyParser.json());
app.use(cors());
app.use('/gets', getsRoute);
app.use('/posts', postsRoute);
app.use('/deletes', deletesRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'builtinModules', 'index.html'));
    });
}

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
console.log('MongoDB database connection established successsfully')
);


app.listen(PORT, function() {
    console.log('Server is running in Port: ' + PORT);
});