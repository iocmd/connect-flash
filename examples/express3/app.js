'use strict';

const express = require('express');
const {flash} = require('../..');
const app = express();

// configure Express
app.configure(() => {
    app.set('views', `${__dirname}/views`);
    app.set('view engine', 'ejs');
    app.use(express.logger());
    app.use(express.cookieParser('keyboard cat'));
    app.use(express.session({
        key: 'sid',
        cookie: {
            maxAge: 60_000,
        },
    }));
    
    // Use connect-flash middleware.  This will add a `req.flash()` function to
    // all requests, matching the functionality offered in Express 2.x.
    app.use(flash());
    app.use(app.router);
});

app.get('/', (req, res) => {
    res.render('index', {
        message: req.flash('info'),
    });
});

app.get('/flash', (req, res) => {
    req.flash('info', 'Hi there!');
    res.redirect('/');
});

app.get('/no-flash', (req, res) => {
    res.redirect('/');
});

app.get('/multiple-flash', (req, res) => {
    req.flash('info', ['Welcome', 'Please Enjoy']);
    res.redirect('/');
});

app.listen(3000);
