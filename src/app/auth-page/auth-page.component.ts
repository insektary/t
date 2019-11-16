import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.less']
})
export class AuthPageComponent implements OnInit {

    public email: string;
    public password: string;

    constructor() { }

    ngOnInit() {
    }

    emailChange(value) {
        this.email = value;
    }

    passwordChange(value) {
        this.password = value;
    }

    logIn() {
        console.log(`log in with email ${this.email} password ${this.password}`);
    }

}
