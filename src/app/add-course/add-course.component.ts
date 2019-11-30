import {Component, OnInit} from '@angular/core';

type FormValuesType = {
    title: string,
    description: string,
    startDate: string,
    duration: number
}

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {

    public formValues: FormValuesType = {
        title: '',
        description: '',
        startDate: '',
        duration: null
    }

    constructor() { }

    ngOnInit() {
    }

    onCancel() {
    }

    onSubmit() {
        console.log(this.formValues);
    }
}
