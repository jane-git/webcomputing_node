const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();



const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));