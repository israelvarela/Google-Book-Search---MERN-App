const express = require('express');



const app = express();

const morgan = require('morgan');
app.use(morgan('tiny'));

app.listen(5000, () => {
    console.log("Server started on PORT : ");
})

//Initialize DB

require('./initDB')();