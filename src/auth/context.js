import React from "react";

import { fakeAuthProvider } from "./fakeAuth";

let AuthContext = React.createContext(null);

function AuthProvider( { children } ) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
  
function useAuth() {
    return React.useContext(AuthContext);
}

export { useAuth, AuthProvider, AuthContext }