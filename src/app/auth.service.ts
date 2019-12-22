import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoaderService} from './loader.service';
import {AppState} from './interfaces/store';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        public loaderService: LoaderService,
        public store: Store<AppState>
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

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    isAuthenticated(): Observable<object> {
        return this.http.post('api/auth/userInfo', {token: this.getToken()});
    }

    getUserInfo(): Observable<any> {
        return this.http.post('api/auth/userInfo', {token: this.getToken()});
    }
}
