import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/interfaces/course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {

    @Input() public courseList: Course[];

    constructor() {
        this.courseList = [
            {
                id: 1,
                title: 'title1',
                creationDate: '12.12.2001',
                duration: '60h',
                description: 'description1'
            },
            {
                id: 2,
                title: 'title2',
                creationDate: '12.12.2001',
                duration: '60h',
                description: 'description2'
            }
        ];
    }

    ngOnInit() {
    }

}
