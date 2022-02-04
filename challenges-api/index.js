var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permissions')();

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-j8duo1n4.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.challenges-api.com',
    issuer: 'https://dev-j8duo1n4.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/test', function (req, res) {
    console.log("test");
    res.json('Hello World')
  })

app.get('/challenges', guard.check(['read:challenges']), function (req, res) {
    res.json({
        challenge1: "Set up Auth0",
        challenge2: "Write simple challenge API",
        challenge3: "Set up Auth0 for application",
        challenge4: "Code frontend application",
        challenge5: "Code dashboard backend"
    });
});



app.listen(port);
