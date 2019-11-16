import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/interfaces/course';
import {CoursesService} from '../courses.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less'],
    providers: [CoursesService]
})
export class CourseListComponent implements OnInit {


    @Input() public filter$: string;
    public courseList: Course[] = [];

    constructor(private coursesService: CoursesService) {
        
    }

    ngOnInit() {
        this.courseList = this.coursesService.getData();
    }

    deleteCourse(id: number) {
        const isConfirm = confirm('Подтвердите удаление курса');

        if (isConfirm) {
            this.coursesService.deleteCourse(id);

            this.courseList = this.coursesService.getData();
        }
    }

    addCourse() {
        console.log('New course was added');
    }

}
