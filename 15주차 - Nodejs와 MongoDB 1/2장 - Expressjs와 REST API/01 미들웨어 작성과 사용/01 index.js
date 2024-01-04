const express = require('express');

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const setUser = require('./middlewares/set-user');
const adjuerQuery = require('./middlewares/adjust-query');


const app = express();

app.use(adjuerQuery);

app.get('/', (req, res) => {
    res.send("OK");
});

app.use('/users', setUser(), usersRouter);
app.use('/admin', setUser('admin'), adminRouter);

app.listen(8080);