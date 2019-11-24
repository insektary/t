import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.less'],
    providers: [AuthService]
})
export class AuthPageComponent implements OnInit {

    public email: string;
    public password: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    emailChange(value: string) {
        this.email = value;
    }

    passwordChange(value: string) {
        this.password = value;
    }

    logIn() {
        this.authService.logIn(this.email, this.password);
    }

}
