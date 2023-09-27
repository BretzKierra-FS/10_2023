const express = require('express');
const app = express();
const router = require('./routes/users');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api', router);

app.listen(3000, () => console.log('Server is Running'));
