import React from "react";
import { Link } from "react-router-dom";
import { firebase } from "../../../config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { get } from "lodash";

const ByProvider = ({ isLoading, setIsLoading, onSuccess }) => {
  const auth = getAuth();

  const openPopupToProvider = (provider) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    signInWithPopup(auth, get(firebase.providers, provider))
      .then((result) => {
        const { operationType, providerId, user } = result;
        if (operationType === "signIn") {
          const { uid, stsTokenManager } = user;
          return onSuccess(providerId, uid, stsTokenManager);
        }
        return setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        return console.error(e);
      });
  };

  return (
    <ul className="iq-social-media">
      <li>
        <Link to="#" onClick={() => openPopupToProvider("google")}>
          <i className="ri-google-line"></i>
        </Link>
      </li>
      <li>
        <Link to="#" onClick={() => openPopupToProvider("facebook")}>
          <i className="ri-facebook-box-line"></i>
        </Link>
      </li>
    </ul>
  );
};

export default ByProvider;
