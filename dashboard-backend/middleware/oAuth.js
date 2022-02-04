var axios = require("axios");

 oAuth = (req, res, next) => {
  var code = req.query.code;

  if(!code) {
    res.status(401).send("Missing authorization code");
  }

  const tokenEndpoint = process.env.AUTH0_TOKEN_URL;

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", process.env.AUTH0_CLIENT_ID);
  params.append("client_secret", process.env.AUTH0_CLIENT_SECRET)
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:3000/challenges");
  axios.post(tokenEndpoint, params)
  .then(response => {
    req.oauth = response.data;
    next();
  })
  .catch(err => {
    res.status(403).json(`Reason: ${err.message}`);
  })
}

module.exports = oAuth;