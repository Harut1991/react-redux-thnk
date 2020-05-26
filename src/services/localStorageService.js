import Singleton from "./singleton";

class LocalStorageService extends Singleton{
    constructor() {
        return super(LocalStorageService);
    }

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    getItem(key) {
        return this.hasItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    }

    hasItem(key) {
        return !!localStorage.getItem(key);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear()
    }
}

export default LocalStorageService;