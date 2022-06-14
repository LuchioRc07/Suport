const express = require('express');
const app     = express();
const path    = require('path');
const port    = 3000
const indexRouter = require('./routes/index');

/* Metodos */
app.set('view engine', 'pug');
app.set('views', path.resolve('./views') );

/* Routeadores */
app.use(express.static ('public') );
app.use('/', indexRouter);

/* Puertos */
app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

});
