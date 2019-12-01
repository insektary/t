import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './search/search.component';
import {CourseComponent} from './course/course.component';
import {FooterComponent} from './footer/footer.component';
import {CourseListComponent} from './course-list/course-list.component';
import {ButtonComponent} from './button/button.component';
import {InputComponent} from './input/input.component';
import {BorderGreenDirective} from './border-green.directive';
import {DurationFormatterPipe} from './duration-formatter.pipe';
import {FilterPipe} from './filter.pipe';
import {OrderByPipe} from './order-by.pipe';
import {AuthPageComponent} from './auth-page/auth-page.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {TextareaComponent} from './textarea-component/textarea-component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'auth',
        component: AuthPageComponent
    },
    {
        path: 'courses',
        component: CourseListComponent
    },
    {
        path: 'courses/new',
        component: AddCourseComponent,
        pathMatch: 'full'
    },
    {
        path: 'courses/:id',
        component: AddCourseComponent
    },
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SearchComponent,
        CourseComponent,
        FooterComponent,
        CourseListComponent,
        ButtonComponent,
        InputComponent,
        BorderGreenDirective,
        DurationFormatterPipe,
        FilterPipe,
        OrderByPipe,
        AuthPageComponent,
        AddCourseComponent,
        TextareaComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
