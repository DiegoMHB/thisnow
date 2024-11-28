
const dotenv = require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


dotenv.config();
const router = require('./router');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
});