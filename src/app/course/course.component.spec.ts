import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {ButtonComponent} from '../button/button.component';
import {CourseComponent} from './course.component';

describe('CourseComponent', () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;
    const itemParams = {
        id: 1,
        title: 'Video course 1. Name tag',
        creationDate: '12.12.2001',
        duration: '60h 28m',
        startDate: '9 Nov, 2019',
        description: 'Lorem ipsum dolor sit amet'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [CourseComponent, ButtonComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        component.item = itemParams;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check title', () => {
		const title = fixture.debugElement.query(By.css('.course-title'));
		expect(title.nativeElement.innerText).toBe(itemParams.title);
    });
    
    it('check duration and startDate', () => {
		const duration = fixture.debugElement.query(By.css('.course-duration'));
        expect(duration.nativeElement.innerText).toContain(itemParams.duration);
        expect(duration.nativeElement.innerText).toContain(itemParams.startDate);
    });
    
    it('check description', () => {
		const description = fixture.debugElement.query(By.css('.course-description'));
		expect(description.nativeElement.innerText).toBe(itemParams.description);
	});
});
