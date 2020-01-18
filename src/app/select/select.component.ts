import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

interface ItemType {
    title: string;
    isActive: boolean;
}

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {

    @Input() public languages: ItemType[] = [];
    @Output() public onchange: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onChange(event) {
        this.onchange.emit(event.target.value);
    }

}
