
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const plotsRouter = require('./routes/plots.router'); // plots router link
const productsRouter = require('./routes/products.router');  //products router link not (s) on products
const productTypeRouter = require('./routes/productType.router'); //product type router link
const unitSqRouter = require('./routes/unitsSq.router'); // units sq  router link

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.user('/api/plots', plotsRouter);
app.user('/api/products', productsRouter);
app.use('/apu/productType', productTypeRouter);
app.use('/api/unitSq', unitSqRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
