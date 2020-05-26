import Singleton from "./singleton";
import LocalStorageService from "./localStorageService";

class LanguageService extends Singleton {
    
    constructor() {
        const instance = super(LanguageService);
        this.defaultLang = 'en-EN';
        this.storageService = new LocalStorageService();
        return instance;
    }

    getLang() {
        return this.storageService.hasItem('lang') ? this.storageService.getItem('lang') : this.defaultLang;
    }

    setLang(value) {
        this.storageService.setItem('lang', value);
    }
}

export default LanguageService;