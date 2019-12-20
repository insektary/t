import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.less'],
    providers: [AuthService]
})
export class AuthPageComponent implements OnInit {

    public login = '';
    public password = '';

    constructor(
        private authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
    }

    logIn() {
        this.authService.logIn(this.login, this.password)
            .then(() => this.router.navigate(['/courses']))
            .catch(() => console.log('error'));
    }

}
