import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Course} from 'src/app/interfaces/course';
import {CoursesService} from '../courses.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less'],
    providers: [CoursesService]
})
export class CourseListComponent implements OnInit {

    public courseList: Course[] = [];
    public filter$: string = '';

    constructor(
        public coursesService: CoursesService,
        public router: Router
    ) {

    }

    ngOnInit() {

    }

    deleteCourse(id: number) {
        const isConfirm = confirm('Подтвердите удаление курса');

        if (isConfirm) {
            this.coursesService.deleteCourse(id);
        }
    }

    addCourse() {
        this.router.navigateByUrl('/courses-new');
    }

    setSearchedValue(value: string) {
		this.filter$ = value;
	}

}
