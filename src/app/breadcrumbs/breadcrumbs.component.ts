import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

    public breadcrumbs: any[];

    constructor() {
        this.breadcrumbs = [
            {
                id: 1,
                title: 'Courses'
            },
            {
                id: 2,
                title: 'Videoooooooooooooooooo'
            }
        ];
    }

    ngOnInit() {
    }

}
