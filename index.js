const express = require('express');
const app = express();
const router = require('router/users')


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api', router)

app.get('/users', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log('server is Running'));
