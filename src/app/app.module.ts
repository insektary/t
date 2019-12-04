import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
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
import {MainGuard} from './main.guard';
import {CourseViewComponent} from './course-view/course-view.component';

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
        CourseViewComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
    ],
    providers: [CoursesService, MainGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
