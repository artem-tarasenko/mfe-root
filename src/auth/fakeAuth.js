const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 300); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 300);
    }
};

export { fakeAuthProvider };
  