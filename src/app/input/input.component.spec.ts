import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {InputComponent} from './input.component';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [InputComponent],
        imports: [FormsModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test change', () => {
        spyOn(component, 'valueChange');
        const input = fixture.debugElement.nativeElement.querySelector('input');
        input.value = 'test';
        input.dispatchEvent(new Event('input'));

        expect(component.valueChange).toHaveBeenCalledWith('test');
    });

    it('test eventEmitter', () => {
        spyOn(component.onchange, 'emit');
        component.valueChange('test');

        expect(component.onchange.emit).toHaveBeenCalledWith('test');
    });
});
