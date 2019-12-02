import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthService} from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    providers: [AuthService]
})
export class AppComponent implements OnInit, OnChanges {
    title = 'angular-mentoring';
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute) {
        // this.subscription = activateRoute.url.subscribe(url => console.log(url));
        // console.log(activateRoute.snapshot.paramMap.get('id'))
    }

    ngOnInit() {

    }

    ngOnChanges() {
        // console.log(this.activateRoute.snapshot)
    }
}
