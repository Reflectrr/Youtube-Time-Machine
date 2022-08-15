import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { setUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import { getSubscribedChannels, OAuthRequest } from "../services/service";
import { useHistory, useLocation } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  // 1. Load the JavaScript client library.
  useEffect(() => {
    const handleCallbackResponse = async (response) => {
      let token = response.credential;
      let userObject = jwt_decode(token);
      dispatch(setUser(userObject));
      console.log(userObject);
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly&include_granted_scopes=true&client_id=864445880843-lafkj1dgakaf8hh8h235i3ngh9q9cou7.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&state=pineapple`;

      //const oauth = await OAuthRequest();
      //const res = await getSubscribedChannels(token);
      //console.log(res);
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
  }, [dispatch, history, location.href]);
  return <div id="signInDiv">OAuth here</div>;
};

export default OAuth;
