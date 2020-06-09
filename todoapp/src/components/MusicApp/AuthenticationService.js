class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('Successful Login')
        sessionStorage.setItem('authenticatedUser', username);
    }

}

export default new AuthenticationService()