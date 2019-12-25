import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        public loaderService: LoaderService
    ) { }

    logIn(login: string, password: string): Observable<any> {
        return this.http.post('api/auth/login', {login, password}, {reportProgress: true});
    }

    logOut(): void {
        localStorage.removeItem('token');
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    isAuthenticated(): Observable<string> {
        return new Observable(subscriber => {
            subscriber.next(this.getToken());
            subscriber.complete();
        });
    }

    getUserInfo(): Observable<object> {
        return this.http.post('api/auth/userInfo', {token: this.getToken()});
    }
}
