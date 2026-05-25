# connect-flash [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

[NPMURL]: https://npmjs.org/package/@iocmd/connect-flash "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/@iocmd/connect-flash.svg?style=flat
[BuildStatusURL]: https://github.com/coderaiser/@iocmd/connect-flash/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/@iocmd/connect-flash/workflows/Node%20CI/badge.svg
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat

Fork of [connect-flash](https://github.com/jaredhanson/connect-flash). Contains:

- ✅ Fixed [`isArray`](https://github.com/jaredhanson/connect-flash/issues/75) bug;
- ✅ Fixed tests;
- ✅ Updated dependencies;
- ✅ Migrated to ESM;

The flash is a special area of the session used for storing messages.  Messages
are written to the flash and cleared after being displayed to the user.  The
flash is typically used in combination with redirects, ensuring that the message
is available to the next page that is to be rendered.

This middleware was extracted from [Express](http://expressjs.com/) 2.x, after
Express 3.x removed direct support for the flash.  connect-flash brings this
functionality back to Express 3.x, as well as any other middleware-compatible
framework or application. +1 for [radical reusability](http://substack.net/posts/b96642/the-node-js-aesthetic).

## Install

```
npm i @iocmd/connect-flash
```

## Usage

Flash messages are stored in the session.  First, setup sessions as usual by
enabling `cookieParser` and `session` middleware.  Then, use `flash` middleware
provided by connect-flash.

```javascript
import {flash} from 'connect-flash';
const app = express();

app.configure(() => {
    app.use(express.cookieParser('keyboard cat'));
    app.use(express.session({
        cookie: {
            maxAge: 60_000,
        },
    }));
    app.use(flash());
});
```

With the `flash` middleware in place, all requests will have a `req.flash()` function
that can be used for flash messages.

```javascript
app.get('/flash', (req, res) => {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!');
    res.redirect('/');
});

app.get('/', (req, res) => {
    // Get an array of flash messages by passing the key to req.flash()
    res.render('index', {
        messages: req.flash('info'),
    });
});
```

## Examples

For an example using connect-flash in an Express 3.x app, refer to the [express3](https://github.com/jaredhanson/connect-flash/tree/master/examples/express3)
example.

## Tests

```
$ npm install --dev
$ make test
```

[![Build Status](https://secure.travis-ci.org/jaredhanson/connect-flash.png)](http://travis-ci.org/jaredhanson/connect-flash)

## Credits

- [Jared Hanson](http://github.com/jaredhanson)
- [TJ Holowaychuk](https://github.com/visionmedia)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <<http://jaredhanson.net/>>
