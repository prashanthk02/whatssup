const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')


// db connection
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const search_recipes_Router = require('./routes/search_recipes');
const recipe_details_Router = require('./routes/recipe_details');
const recipesRouter = require('./routes/recipes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter());
app.use('/users', usersRouter());
app.use('/login', loginRouter(db));
app.use('/register', registerRouter());
app.use('/new', search_recipes_Router());
app.use('/recipe', recipe_details_Router());
app.use('/recipes', recipesRouter());


module.exports = app;
