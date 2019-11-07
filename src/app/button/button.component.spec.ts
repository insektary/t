import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';

enum Sizes {
    'BIG',
    'MEDIUM',
    'SMALL'
}

enum Colors {
    'GREEN',
    'BLUE'
}

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
        component.size = Sizes.MEDIUM;
        component.color = Colors.BLUE;
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
});
