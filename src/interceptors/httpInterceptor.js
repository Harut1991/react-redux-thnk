
import axios from 'axios';
import LanguageService from '../services/languageService';
import LocalStorageService from '../services/localStorageService';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const authData = (new LocalStorageService()).getItem('auth');
    const selecteLanguage = (new LanguageService()).getLang();

    if (config.headers['grant_type'] !== 'refresh_token') {
        //Set access token
        if (authData && authData.token) {
            config.headers['Authorization'] = 'Bearer ' + authData.token;
        }

        //Set selected language
        if (selecteLanguage) {
            config.headers['accept-language'] = selecteLanguage;
        }

        //Set default content type
        if (!config.headers['Content-Type'] || config.headers['Content-Type'] === 'text/plain;charset=UTF-8') {
            config.headers['Content-Type'] = 'application/json';
        }
    } else {
        delete config.headers['grant_type'];
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
