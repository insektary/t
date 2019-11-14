import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './search/search.component';
import {CourseComponent} from './course/course.component';
import {FooterComponent} from './footer/footer.component';
import {CourseListComponent} from './course-list/course-list.component';
import {ButtonComponent} from './button/button.component';
import {InputComponent} from './input/input.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [FormsModule, BrowserModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [
            AppComponent,
            HeaderComponent,
            BreadcrumbsComponent,
            SearchComponent,
            CourseComponent,
            FooterComponent,
            CourseListComponent,
            ButtonComponent,
            InputComponent
        ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-mentoring'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('angular-mentoring');
    });
});
