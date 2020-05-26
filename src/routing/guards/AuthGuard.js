import LocalStorageService from "../../services/localStorageService";

let localStorageService = new LocalStorageService();

class AuthGuard {
    static CanActivate() {
        return localStorageService.hasItem('auth');
    }

    static CanDeactivate() {
        return !AuthGuard.CanActivate();
    }
}
 export default AuthGuard;