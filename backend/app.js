const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


// db connection
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const search_recipes_Router = require('./routes/search_recipes');
const recipe_details_Router = require('./routes/recipe_details');
const recipesRouter = require('./routes/recipes');
const favorite_recipes_Router = require('./routes/favorite_recipes')

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter(db));
app.use('/users', usersRouter(db));
app.use('/login', loginRouter(db));
app.use('/register', registerRouter(db));
app.use('/new', search_recipes_Router(db));
app.use('/recipe', recipe_details_Router(db));
app.use('/recipes', recipesRouter(db));
app.use('/favorite', favorite_recipes_Router(db));


module.exports = app;
