import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    private buttonTitle: string;
    public foundedValue: string;

    constructor() {
        this.buttonTitle = 'Search';
        this.foundedValue = '';
        this.onClick = this.onClick.bind(this);
    }

    ngOnInit() {
    }

    foundedValueChange(value) {
        this.foundedValue = value;
    }

    onClick() {
        console.log(`Search ${this.foundedValue}`);
    }

}
