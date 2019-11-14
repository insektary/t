import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Course} from 'src/app/models/course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

    @Input() public item: Course;
    @Output() public ondelete: EventEmitter<number> = new EventEmitter();
    @Output() public onedit: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    handleDelete() {
        const {item: {id}} = this;

        this.ondelete.emit(id);
    }

    handleEdit() {
        const {item: {id}} = this;

        this.onedit.emit(id);
    }

}
