import React from "react";
// import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  // const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  const login = async () => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = "https://www.challenges-api.com";
    const scope = process.env.REACT_APP_AUTH0_SCOPE;
    const responseType = "code";
    const redirectUri = "http://localhost:3000/challenges";

    const response = await fetch(
      `https://${domain}/authorize?` + 
      `audience=${audience}&` + 
      `scope=${scope}&` +
      `response_type=${responseType}&` +
      `client_id=${clientId}&` +
      `redirect_uri=${redirectUri}`, {
        redirect: "manual"
      }
    );

    window.location.replace(response.url);
  };

  return (
    <button className="Login-button" onClick={() => login()}>
      Log In
    </button>
  );
};

export default LoginButton;