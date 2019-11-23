import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {

    addCourseForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.addCourseForm = this.fb.group({
            title: '',
            description: '',
            date: null,
            duration: null,
            authors: ''
        });
    }

    onSubmit() {
        console.log('Add course with next params:');
        console.log(this.addCourseForm.value);
    }

    onCancel() {
        
    }

}
