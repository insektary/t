import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorsFormInputComponent} from './authors-form-input.component';

describe('AuthorsFormInputComponent', () => {
    let component: AuthorsFormInputComponent;
    let fixture: ComponentFixture<AuthorsFormInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ AuthorsFormInputComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorsFormInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
