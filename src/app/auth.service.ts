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

    subscriber = (onSuccess: (event: any) => void) => (event: any) => {
        if (event.type === HttpEventType.DownloadProgress) {
            this.loaderService.showLoader();
        }
        if (event.type === HttpEventType.Response) {
            this.loaderService.hideLoader();
            onSuccess(event);
        }
    }

    logIn(login: string, password: string): Observable<any> {
        return this.http.post('api/auth/login', {login, password}, {reportProgress: true, observe: 'events'});
    }

    logOut(): void {
        localStorage.removeItem('token');
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    isAuthenticated(): Observable<object> {
        return this.http.post('api/auth/userInfo', {token: this.getToken()});
    }

    getUserInfo(): Observable<object> {
        return this.http.post('api/auth/userInfo', {token: this.getToken()});
    }
}
