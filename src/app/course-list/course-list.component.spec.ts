import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CourseListComponent} from './course-list.component';
import {CourseComponent} from '../course/course.component';
import {BorderGreenDirective} from '../border-green.directive';
import {DurationFormatterPipe} from '../duration-formatter.pipe';
import {OrderByPipe} from '../order-by.pipe';
import {FilterPipe} from '../filter.pipe';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            CourseListComponent,
            CourseComponent,
            OrderByPipe,
            FilterPipe,
            BorderGreenDirective,
            DurationFormatterPipe
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
