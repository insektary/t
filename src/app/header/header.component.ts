import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    providers: [AuthService]
})
export class HeaderComponent implements OnInit {

    constructor(
        private authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
    }

    logIn() {

    }

    logOff() {
        this.authService.logOut();
        this.router.navigateByUrl('/auth');
    }

}
