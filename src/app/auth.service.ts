import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    logIn(login: string, password: string): Promise<any> {
        return new Promise((res, rej) => {
            this.http.post('api/auth/login', {login, password})
                .subscribe((data: {token?: string}) => {
                    if (data && data.token) {
                        localStorage.setItem('token', data.token);
                        res();
                    } else {
                        rej();
                    }
                }, () => rej());
        });
    }

    logOut(): void {
        localStorage.removeItem('token');
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return Boolean(this.getToken());
    }

    getUserInfo(): Promise<object> {
        return new Promise((res, rej) => {
            this.http.post('api/auth/userInfo', {token: this.getToken()})
                .subscribe((data) => res(data));
        });
    }
}
