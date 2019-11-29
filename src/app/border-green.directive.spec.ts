import {NO_ERRORS_SCHEMA, ElementRef, Input} from '@angular/core';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component} from '@angular/core';
import * as moment from 'moment';
import {By} from '@angular/platform-browser';
import {BorderGreenDirective} from './border-green.directive';

@Component({
    template: `<div appBorderGreen [startDate]='startDate'>Test</div>`
})
class AboutComponent {
    public startDate: string;
}

describe('BorderGreenDirective', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [BorderGreenDirective, AboutComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
        .createComponent(AboutComponent);
        component = fixture.componentInstance;

    });

    // Not perfect tests. May be errors in first and last dates of mounth

    it('should have skyblue border', () => {
        component.startDate = moment().add(5, 'days').format();
        fixture.detectChanges();
        const el = fixture.debugElement.queryAll(By.directive(BorderGreenDirective));

        expect(el[0].nativeElement.style.border).toBe('1px solid skyblue');
    });

    it('should have greenyellow border', () => {
        component.startDate = moment().subtract(5, 'days').format();
        fixture.detectChanges();
        const el = fixture.debugElement.queryAll(By.directive(BorderGreenDirective));

        expect(el[0].nativeElement.style.border).toBe('1px solid greenyellow');
    });
});






































// @Component({
//     selector: 'app-mock-component',
//     template: '<div></div>',
//     styles: ['div { border: 1px solid green; }']
// })
// class MockComponent  {
//     startDate: string;

//     constructor() {
//     }
// }

// describe('BorderGreenDirective', () => {

//     let component: MockComponent;
//     let fixture: ComponentFixture<MockComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//         declarations: [
//             BorderGreenDirective,
//             MockComponent
//         ],
//         schemas: [NO_ERRORS_SCHEMA]
//         }).compileComponents().then(() => {
//             const dir = new BorderGreenDirective()
//             fixture = TestBed.createComponent(MockComponent);
//             component = fixture.componentInstance;
//         });
//     }));

//     it('should color only p background', () => {
//         component.startDate = 'Mon Nov 18 2019 12:32:41 GMT+0300';
//         fixture.detectChanges();

//         const el = fixture.debugElement.queryAll(By.directive(BorderGreenDirective));
//         console.log(el);
//     });

    // beforeEach(async(() => {
    //         TestBed.configureTestingModule({
    //         declarations: [
    //             BorderGreenDirective,
    //             CourseComponent
    //         ],
    //         schemas: [NO_ERRORS_SCHEMA]
    //         }).compileComponents().then(() => {
    //             fixture = TestBed.createComponent(CourseComponent);
    //             component = fixture.componentInstance;
    //         });
    //     }));

    // it('should color only p background', () => {
    //     component.item = {
    //         id: 1,
    //         title: 'Angular',
    //         isFavorite: true,
    //         creationDate: 'Fri Nov 1 2019 12:32:41 GMT+0300',
    //         duration: 45,
    //         startDate: 'Mon Nov 18 2019 12:32:41 GMT+0300',
    //         description: 'test'
    //     };
    //     fixture.detectChanges();

    //     const el = fixture.debugElement.queryAll(By.directive(BorderGreenDirective));
    //     console.log(el[0].classes);
    // });
// });
