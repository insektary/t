import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursesService} from '../courses.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {

    public filter$ = '';

    constructor(
        public coursesService: CoursesService,
        public router: Router
    ) {

    }

    ngOnInit() {
        this.coursesService.fetchData();
    }

    deleteCourse(id: number) {
        const isConfirm = confirm('Подтвердите удаление курса');

        if (isConfirm) {
            this.coursesService.deleteCourse(id)
                .then(() => this.coursesService.fetchData());
        }
    }

    editCourse(id: number) {
        this.router.navigateByUrl(`courses/${id}`);
    }

    addCourse() {
        this.router.navigateByUrl('/courses/new');
    }

    setSearchedValue(value: string) {
        this.filter$ = value;
    }

}
