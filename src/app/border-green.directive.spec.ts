import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, HostListener } from '@angular/core';
import { BorderGreenDirective } from './border-green.directive';

describe('BorderGreenDirective', () => {

    @Component({
        // selector: 'mock-component',
        template: '<div></div>',
        // styleUrls: ['./course.component.less']
    })
    class MockComponent extends ElementRef {
        constructor() {
            super('<div class="test"></div>');
        }
    }

    let component: MockComponent;
    let fixture: ComponentFixture<MockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MockComponent,
                BorderGreenDirective
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(MockComponent);
        component = fixture.componentInstance;
    })

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should create an instance', () => {
        const directive = new BorderGreenDirective(new MockComponent());
        const el = fixture.debugElement.nativeElement.querySelector('div');
        expect(directive).toBeTruthy();
    });
});
