import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {Store, select} from '@ngrx/store';
import {setAuthData} from '../store/actions/authData';
import {UserName} from '../interfaces/authData';
import {getAuthData} from '../store/selectors/selectors';
import {AppState} from '../interfaces/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    providers: [AuthService]
})
export class HeaderComponent implements OnInit {

    name$: Observable<UserName>;

    constructor(
        private authService: AuthService,
        public router: Router,
        public store: Store<AppState>
    ) {}

    ngOnInit() {
        this.authService.getUserInfo()
            .subscribe(({name}) => this.store.dispatch(setAuthData({payload: name})));
        this.name$ = this.store.pipe(select(getAuthData));
    }

    logIn() {
        this.router.navigateByUrl('/auth');
    }

    logOff() {
        this.authService.logOut();
        this.router.navigate(['/auth']);
    }

}
