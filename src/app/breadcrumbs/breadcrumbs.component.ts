import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Location} from '@angular/common';
import {CoursesService} from '../courses.service';
import {getEditableCourse} from '../store/selectors/selectors';
import {AppState} from '../interfaces/store';
@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

    public breadcrumbs: any[];
    public currentUrl: string;

    constructor(
        private router: Router,
        public coursesService: CoursesService,
        public location: Location,
        public store: Store<AppState>
    ) {

        this.currentUrl = location.path();
        this.breadcrumbs = this.currentUrl.split('/').filter(Boolean);

        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.onRouteChange();
            }
        });

    }

    ngOnInit() {
        this.store.pipe(select(getEditableCourse))
            .subscribe(({name}) => this.countBreadcrumbs(name));
    }

    countBreadcrumbs(name?: string) {
        const {location} = this;
        const newUrl = location.path();

        this.breadcrumbs = newUrl.split('/').filter(Boolean).map((item) => {
            const id = parseInt(item, 10);

            if (!isNaN(id) && name) {
                return name;
            }

            return item;
        });
    }

    onRouteChange() {
        this.countBreadcrumbs();
    }

}
