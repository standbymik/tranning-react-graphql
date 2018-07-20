import Cookies from 'universal-cookie'

export function loginSuccess(token) {
    return (dispatch) => {
        const cookies = new Cookies();

        cookies.set('token', token, { path: '/' });
        console.log(cookies.get('token')); // Pacman

        dispatch({
            type: 'LOGIN_SUCCESS', token
        })
    }
}

export function logout() {
    return (dispatch) => {
        const cookies = new Cookies();

        cookies.remove('token',{ path: '/' });

        dispatch({
            type: 'LOGOUT'
        })
    }
}