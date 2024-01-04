const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dayjs = require('dayjs');
const session = require('express-session');
const passport = require('passport'); 

const indexRouter = require('./routes');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

const loginRequired = require('./middlewares/login-required');

require('./passport')();

mongoose.connect('mongodb://localhost:27017/simple-board');

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
  secret: 'elice', 
  resave: false, 
  saveUninitialized: true 
}));

//초기화 위치는 위의 app.use session 다음해주는게 좋을 거 같대
//이 초기화들은 필수라 외워두는게 좋다네용
// passport initialize
// passport session 
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
// /posts 경로에 로그인 필수로 설정하기
app.use('/posts', loginRequired, postsRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
