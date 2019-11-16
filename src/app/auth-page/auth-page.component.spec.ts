import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {InputComponent} from '../input/input.component';
import {AuthPageComponent} from './auth-page.component';

describe('AuthPageComponent', () => {
    let component: AuthPageComponent;
    let fixture: ComponentFixture<AuthPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            AuthPageComponent,
            ButtonComponent,
            InputComponent
        ],
        imports: [FormsModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
