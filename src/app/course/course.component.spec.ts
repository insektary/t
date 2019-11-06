import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ButtonComponent} from '../button/button.component';
import {CourseComponent} from './course.component';

describe('CourseComponent', () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [CourseComponent, ButtonComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        component.item = {
            id: 1,
            title: 'Video course 1. Name tag',
            creationDate: '12.12.2001',
            duration: '60h 28m',
            startDate: '9 Nov, 2019',
            description: 'Lorem ipsum dolor sit amet'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
