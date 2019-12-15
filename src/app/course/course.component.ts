import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {Course} from 'src/app/models/course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

    @Input() public item: Course;
    @Output() public ondelete: EventEmitter<number> = new EventEmitter();
    @Output() public onedit: EventEmitter<number> = new EventEmitter();

    constructor(public router: Router) {
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

    goToCourseView() {
        const {item: {id}} = this;

        this.router.navigate([`courses/${id}/view`]);
    }

}
