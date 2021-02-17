const express = require('express');


const app = express();
app.set('port', (process.env.PORT || 5000));

const morgan = require('morgan');
app.use(morgan('tiny'));


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})

//Initialize DB

require('./initDB')();