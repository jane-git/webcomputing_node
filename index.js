const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const stockRouter = require("./routes/stock");
const userRouter = require("./routes/stock");

const app = express();


app.use('/user', userRouter);
app.use('/stocks', stockRouter);
 

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));