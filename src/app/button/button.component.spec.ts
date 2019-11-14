import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ButtonComponent} from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ ButtonComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        component.title = 'test';
        component.size = 'MEDIUM';
        component.color = 'BLUE';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test click', () => {
        spyOn(component, 'handleClick');
        const button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();

        expect(component.handleClick).toHaveBeenCalled();
    });

    it('test eventEmitter', () => {
        spyOn(component.onclick, 'emit');
        component.handleClick();

        expect(component.onclick.emit).toHaveBeenCalled();
    });

    it('test css', () => {
        spyOn(component, 'handleClick');
        const button = fixture.debugElement.nativeElement.querySelector('button');
        fixture.detectChanges();

        expect(button.className).toContain('button--medium');
        expect(button.className).toContain('button--blue');
    });
});
