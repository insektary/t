import {Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    public buttonTitle: string;
    @Output() private startSearch: EventEmitter<string> = new EventEmitter();
    nativeInput: ElementRef['nativeElement'];

    constructor(ref: ElementRef) {
        this.buttonTitle = 'Search';
        this.nativeInput = ref.nativeElement;
    }

    ngOnInit() {
        fromEvent(this.nativeInput.querySelector('input'), 'keyup')
            .pipe(filter(({target: {value}}) => value.length >= 3), debounceTime(1000))
            .subscribe(this.onSearch);
    }

    onSearch = ({target: {value}}) => {
        this.startSearch.emit(value);
    }

}
