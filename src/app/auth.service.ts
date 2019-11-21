import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    logIn(userName: string, token: string): void {
        localStorage.setItem('userData', JSON.stringify({
            userName,
            token
        }));
    }

    logOut(): void {
        localStorage.removeItem('userData');
    }

    isAuthenticated(): boolean {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};

        return Boolean(userData.userName && userData.token);
    }

    getUserInfo(): string {
        return localStorage.getItem('userData');
    }
}
