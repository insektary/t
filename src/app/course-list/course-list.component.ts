import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CoursesService} from '../courses.service';
import {AuthService} from '../auth.service';
import {LoaderService} from '../loader.service';
import {getCourses} from '../store/selectors/selectors';
import {Course} from '../interfaces/course';
import {AppState} from '../interfaces/store';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {

    public filter$ = '';
    public courses$: Observable<Course[]>;

    constructor(
        public authServise: AuthService,
        public coursesService: CoursesService,
        public loaderService: LoaderService,
        public router: Router,
        public store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.coursesService.fetchData();

        this.courses$ = this.store.pipe(select(getCourses));
    }

    deleteCourse(id: number) {
        const isConfirm = confirm('Подтвердите удаление курса');

        if (isConfirm) {
            this.coursesService.deleteCourse(id)
                .then(() => this.coursesService.fetchData());
        }
    }

    editCourse(id: number) {
        this.router.navigate([`courses/${id}/edit`]);
    }

    addCourse() {
        this.router.navigate(['/courses/new']);
    }

    setSearchedValue(value: string) {
        this.coursesService.resetCount();
        this.coursesService.fetchData(value);
    }

    addMore() {
        this.coursesService.increaseCount(10);
        this.coursesService.fetchData();
    }
}
