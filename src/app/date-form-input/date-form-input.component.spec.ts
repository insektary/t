import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DateFormInputComponent} from './date-form-input.component';

describe('DateFormInputComponent', () => {
    let component: DateFormInputComponent;
    let fixture: ComponentFixture<DateFormInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ DateFormInputComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DateFormInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
