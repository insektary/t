import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
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
import {CoursesService} from './courses.service';
import {TokenInterceptor} from './token-interceptor';
import {MainGuard} from './main.guard';
import {CourseViewComponent} from './course-view/course-view.component';
import {LoaderComponent} from './loader/loader.component';
import {LoaderInterceptor} from './loader-interceptor';
import {LoaderService} from './loader.service';
import {coursesReducer} from './store/reducers/courses';
import {editableCourseReducer} from './store/reducers/editableCourse';
import {authDataReducer} from './store/reducers/authData';

const appRoutes: Routes = [
    {
        path: 'auth',
        component: AuthPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'courses',
        component: CourseListComponent,
        canActivate: [MainGuard],
        pathMatch: 'full'
    },
    {
        path: 'courses/new',
        component: AddCourseComponent,
        canActivate: [MainGuard],
        pathMatch: 'full'
    },
    {
        path: 'courses/:id/edit',
        component: AddCourseComponent,
        canActivate: [MainGuard],
        pathMatch: 'full'
    },
    {
        path: 'courses/:id/view',
        component: CourseViewComponent,
        canActivate: [MainGuard],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: PageNotFoundComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        pathMatch: 'full'
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
        PageNotFoundComponent,
        CourseViewComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        ),
        StoreModule.forRoot({
            courses: coursesReducer,
            editableCourse: editableCourseReducer,
            authData: authDataReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        })
    ],
    providers: [
        CoursesService,
        LoaderService,
        MainGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
