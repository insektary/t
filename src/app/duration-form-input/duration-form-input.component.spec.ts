import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DurationFormInputComponent} from './duration-form-input.component';

describe('DurationFormInputComponent', () => {
    let component: DurationFormInputComponent;
    let fixture: ComponentFixture<DurationFormInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ DurationFormInputComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DurationFormInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
