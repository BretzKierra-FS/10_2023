const express = require('express');
const app = express();
const router = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/', router);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('Server is Running'));
