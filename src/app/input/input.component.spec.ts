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
        spyOn(component, 'updateValue');
        const input = fixture.debugElement.nativeElement.querySelector('input');
        input.value = 'test';
        input.dispatchEvent(new Event('input'));

        expect(component.updateValue).toHaveBeenCalledWith('test');
    });

    it('test eventEmitter', () => {
        spyOn(component.valueChange, 'emit');
        component.updateValue('test');

        expect(component.valueChange.emit).toHaveBeenCalledWith('test');
    });
});
