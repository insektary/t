import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';

interface FormValuesType {
    name: string;
    description: string;
    date: string;
    length: number;
}

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {

    public routeId?: string;
    public formValues: FormValuesType = {
        name: '',
        description: '',
        date: '',
        length: null
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

        this.coursesService.getCourseById(Number(this.routeId))
            .then(([data]) => this.formValues = data)
            .catch(() => this.router.navigateByUrl('/404'));
    }

    onCancel() {
        this.router.navigate(['/courses']);
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
