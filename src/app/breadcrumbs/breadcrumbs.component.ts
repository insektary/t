import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

    public breadcrumbs: any[];
    public currentUrl: string;

    constructor(private route: ActivatedRoute, private router: Router, public location: Location) {

        this.currentUrl = location.path();
        this.breadcrumbs = this.currentUrl.split('/').filter(Boolean);
        router.events.subscribe(() => this.onRouteChange());
    }

    ngOnInit() {

    }

    onRouteChange() {
        const {currentUrl, location} = this;
        const newUrl = location.path();

        if (currentUrl !== newUrl) {
            this.currentUrl = newUrl;
            this.breadcrumbs = this.currentUrl.split('/').filter(Boolean);
        }
    }

}
