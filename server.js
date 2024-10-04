const express = require('express');
const session = require('express-session');
const { SequelizeStore } = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session setup
const sequelize = new Sequelize(/* Your database credentials */);
const sessionStore = new SequelizeStore({
  db: sequelize,
});

app.use(session({
  secret: 'your secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60 * 1000 } // Set cookie expiration time
}));

// Use routes
app.use(routes);

// Sync sequelize and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});
