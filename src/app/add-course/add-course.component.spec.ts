import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {AddCourseComponent} from './add-course.component';

describe('AddCourseComponent', () => {
    let component: AddCourseComponent;
    let fixture: ComponentFixture<AddCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            AddCourseComponent,
            ButtonComponent
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule
        ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('testing component-to-form binding', () => {
        component.addCourseForm.controls['title'].setValue('test-title');
        component.addCourseForm.controls['description'].setValue('test-description');
        component.addCourseForm.controls['date'].setValue('123456789');
        component.addCourseForm.controls['duration'].setValue('987654321');

        const inputs = fixture.debugElement.nativeElement.querySelectorAll('.form-section input');
        const textarea = fixture.debugElement.nativeElement.querySelector('.form-section textarea');
        expect(inputs[0].value).toBe('test-title');
        expect(inputs[1].value).toBe('123456789');
        expect(inputs[2].value).toBe('987654321');
        expect(textarea.value).toBe('test-description');
    })
});
