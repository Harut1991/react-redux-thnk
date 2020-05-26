import ActionTypes from "../constants/ActionTypes";
import LocalStorageService from "../services/localStorageService";
const storageService = new LocalStorageService();

const AuthReducer = (state = { inProcess: false, ...storageService.hasItem('auth') ? storageService.getItem('auth') : {}}, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_UP_IN_BEGIN:
            return {
                ...state,
                inProcess: true
            }
        case ActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                inProcess: false
            }
        case ActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                inProcess: false
            }
        case ActionTypes.SIGN_UP_IN_ERROR:
            return {
                ...state,
                inProcess: false
            }
        case ActionTypes.SIGN_OUT:
            return {}
        default:
            return state
    }
}

export default AuthReducer;