import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

type Sizes = 'BIG' | 'MEDIUM' | 'SMALL';

type Colors = 'GREEN' | 'BLUE';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

    @Input() public title: string;
    @Input() public size: Sizes;
    @Input() public color: Colors;
    @Input() public disabled = false;
    @Output() public onclick: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        this.onclick.emit();
    }

}
