import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {InputComponent} from '../input/input.component';
import {TextareaComponent} from '../textarea-component/textarea-component';
import {DurationFormatterPipe} from '../duration-formatter.pipe';
import {AddCourseComponent} from './add-course.component';

describe('AddCourseComponent', () => {
    let component: AddCourseComponent;
    let fixture: ComponentFixture<AddCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            TextareaComponent,
            DurationFormatterPipe,
            AddCourseComponent,
            ButtonComponent,
            InputComponent
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
        const inputs = fixture.debugElement.nativeElement.querySelectorAll('.form-section input');
        const textarea = fixture.debugElement.nativeElement.querySelector('.form-section textarea');

        inputs[0].value = 'title';
        inputs[0].dispatchEvent(new Event('input'));
        inputs[1].value = 'date';
        inputs[1].dispatchEvent(new Event('input'));
        inputs[2].value = 999;
        inputs[2].dispatchEvent(new Event('input'));
        textarea.value = 'description';
        textarea.dispatchEvent(new Event('input'));

        expect(component.formValues.title).toBe('title');
        expect(component.formValues.startDate).toBe('date');
        expect(component.formValues.description).toBe('description');
        // TODO fix types problem with input type="number"
    });
});
