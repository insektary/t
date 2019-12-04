import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';

interface FormValuesType {
    title: string;
    description: string;
    startDate: string;
    duration: number;
}

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {

    public routeId?: string;
    public formValues: FormValuesType = {
        title: '',
        description: '',
        startDate: '',
        duration: null
    };

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public coursesService: CoursesService
    ) {
        this.routeId = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        if (!this.routeId) {
            return;
        }

        const course = this.coursesService.getCourseById(Number(this.routeId));

        if (course) {
            this.formValues = course;
        } else {
            this.router.navigateByUrl('/404');
        }
    }

    onCancel() {
        this.router.navigateByUrl('/courses');
    }

    onSubmit() {
        if (!this.routeId) {
            this.coursesService.createCourse(this.formValues);
        } else {
            this.coursesService.updateCourse({...this.formValues, id: Number(this.routeId)});
        }

        this.router.navigate(['/courses']);
    }
}
