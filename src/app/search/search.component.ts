import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    private buttonTitle: string;
    public foundedValue: string;
    @Output() private startSearch: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.buttonTitle = 'Search';
        this.foundedValue = '';
    }

    ngOnInit() {
    }

    foundedValueChange(value) {
        this.foundedValue = value;
    }

    onClick() {
        this.startSearch.emit(this.foundedValue);
    }

}
