const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const stockRouter = require("./routes/stock");
const userRouter = require("./routes/stock");

const app = express();



// bodyParser middleware
//server response
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', userRouter);
app.use('/stocks', stockRouter);
 

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));