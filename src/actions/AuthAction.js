import ActionTypes from "../constants/ActionTypes";
import { message } from "antd";
import LocalStorageService from "../services/localStorageService";

const storageService = new LocalStorageService();

const signUpInBegin = () => ({
    type: ActionTypes.SIGN_UP_IN_BEGIN
});

const signUpInError = () => ({
    type: ActionTypes.SIGN_UP_IN_ERROR
});

const signOutAction = () => ({
    type: ActionTypes.SIGN_OUT
});

const signUpSuccess = (payload) => ({
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload
});

const signInSuccess = (payload) => ({
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload
});

export function signUp(data, t) {
    return dispatch => {
        dispatch(signUpInBegin());
        
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({ token: 'xxxxxxx', user: data })
            }, 3000);
            
        }).then(res => {
            storageService.setItem('auth', res);
            dispatch(signUpSuccess(res));
            message.success(t('successful_authorization'));
        }).catch(err => {
            dispatch(signUpInError());
            message.error(t(err.message));
        })
        // return axios({
        //     method: constants.GET,
        //     url: config.BASE_URL + RestPath.CHANGE_PASSWORD,
        //     data: JSON.stringify(params),

        // }).then((response) => {
        //     // Success
        //     dispatch(changePasswordSuccess(params));
        //     message.success(intl.messages.password_changed);
        //     return response.data;

        // })
        //     .catch((error) => {
        //         dispatch(changePasswordError(error));
        //         return 'error';
        //     });
    };
}

export function signIn(data, t) {
    return dispatch => {
        dispatch(signUpInBegin());

        return new Promise((res, rej) => {
            setTimeout(() => {
                res({ token: 'xxxxxxx', user: data })
            }, 3000);

        }).then(res => {
            storageService.setItem('auth', res);
            dispatch(signInSuccess(res));
            message.success(t('successful_authorization'));
        }).catch(err => {
            dispatch(signUpInError());
            message.error(t(err.message));
        })
    };
}

export function signOut(data, t) {
    return dispatch => {
        localStorage.removeItem('auth');
        dispatch(signOutAction());
    };
}
