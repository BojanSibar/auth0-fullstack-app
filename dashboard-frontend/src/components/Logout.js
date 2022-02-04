import React from "react";
// import { useAuth0 } from '@auth0/auth0-react';


const LogoutButton = () => {
  // const { logout } = useAuth0(); test 

  const logoutFetch = async () => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const returnTo = "http://localhost:3000";

    const response = await fetch(
      `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`,
      { redirect: "manual" }
    );

    window.location.replace(returnTo);
  };

  return (
    <button className="Login-button" onClick={() => logoutFetch()}>
      Log out
    </button>
  );
};

export default LogoutButton;