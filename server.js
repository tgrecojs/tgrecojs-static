const express = require('express');
const next = require('next');
const sgMail = require('@sendgrid/mail');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'tgreco@tgrecojs.com',
  from: 'tgreco@tgrecojs.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  // custom route for posts
  server.get('/post/:slug', (req, res) =>
    app.render(req, res, '/post', {
      post: req.params.slug,
    })
  );
  // custom route for tags
  server.get('/tag/:slug', (req, res) =>
    app.render(req, res, '/tag', {
      tag: req.params.slug,
    })
  );

  server.get('*', (req, res) =>{ 
    handle(req, res)
});

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000'); // eslint-disable-line no-console
  });
});
