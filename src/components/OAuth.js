import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { setUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";

const OAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      console.log("Encoded JWT ID token: " + response.credential);
      let userObject = jwt_decode(response.credential);
      dispatch(setUser(userObject));
    };
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "864445880843-lafkj1dgakaf8hh8h235i3ngh9q9cou7.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, [dispatch]);
  return <div id="signInDiv">OAuth here</div>;
};

export default OAuth;
