import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    logIn(userName: string, token: string): void {
        localStorage.setItem('userName', userName);
        localStorage.setItem('token', token);
    }

    logOut(): void {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
    }

    isAuthenticated(): boolean {
        return Boolean(localStorage.getItem('userName') && localStorage.getItem('token'));
    }

    getUserInfo(): string {
        return localStorage.getItem('userName');
    }
}
