import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

interface NameType {
    first: string;
    last: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    providers: [AuthService]
})
export class HeaderComponent implements OnInit {

    name: NameType;

    constructor(
        private authService: AuthService,
        public router: Router
    ) {
        this.name = {
            first: '',
            last: ''
        };
    }

    ngOnInit() {
        this.authService.getUserInfo()
            .subscribe((data: {name: NameType}) => this.name = data.name);
    }

    logIn() {
        this.router.navigateByUrl('/auth');
    }

    logOff() {
        this.authService.logOut();
        this.router.navigate(['/auth']);
    }

}
