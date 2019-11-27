import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	providers: [AuthService]
})
export class AppComponent implements OnInit {
	title = 'angular-mentoring';
	isAuth: boolean = false;
	currentSearch = '';

	constructor(private authService: AuthService) {

	}

	ngOnInit() {
		this.isAuth = this.authService.isAuthenticated();
	}
	
	setSearchedValue(value: string) {
		this.currentSearch = value;
	}
}
