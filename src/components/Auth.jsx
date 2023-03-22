import React, { useState, useEffect } from "react";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { authorization, googleAuthProvider } from "./Firebase";

export const AuthProvider = () => {
  const auth = getAuth(authorization);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
      signInWithRedirect(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch((e) => console.error(e));
    });
    return unsub;
  }, [auth]);

  return (
    <div className="auth">
      {user != null ? <>{user.displayName}</> : <>loading</>}
    </div>
  );
};
