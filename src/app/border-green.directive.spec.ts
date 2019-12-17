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
