import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    public buttonTitle: string;
    public value: string = '';
    @Output() private startSearch: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.buttonTitle = 'Search';
    }

    ngOnInit() {
    }

    onClick() {
        this.startSearch.emit(this.value);
    }

}
