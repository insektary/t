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

	constructor() {

	}

	ngOnInit() {

	}
}
