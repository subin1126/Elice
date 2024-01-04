const express = require('express');
const auth = require('./middlewares/auth');
const noteRouter = require('./routes/notes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/notes', auth, noteRouter);

app.use((req, res, next) => {
    res.status(404);
    res.json({
        result: 'fail',
        error: `Page not found ${req.path}`,
    });
});

app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: 'fail',
        error: err.message,
    });
});

app.listen(8080);

