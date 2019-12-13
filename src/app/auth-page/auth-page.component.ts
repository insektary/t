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

    public email = '';
    public password = '';

    constructor(
        private authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
    }

    logIn() {
        this.authService.logIn(this.email, this.password);
        this.router.navigate(['/courses']);
    }

}
