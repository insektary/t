import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    private buttonTitle: string;

    constructor() {
        this.buttonTitle = 'Search'
    }

    ngOnInit() {
    }

}
