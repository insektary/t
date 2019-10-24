import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/interfaces/course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {

    @Input() public courseList: Course[];

    constructor() {
        this.courseList = [
            {
                id: 1,
                title: 'Video course 1. Name tag',
                creationDate: '12.12.2001',
                duration: '60h',
                description: 'Бетономешалка мешает бетон, Бригада строителей жрет самогон. Прораб Петрович, в доску пьян, Спать устроился в мешалке, Электрик Степа пуск нажал На бетонной скороварке. Бригада строителей жрет самогон, В бетономешалке кровавый раствор. Тесто с мясом хорошо Здесь уже перемешалось Этим вкусным пирогом Вся бригада объедалась… Бетономешалка - алкоголизм Бетономешалка - каннибализм'
            },
            {
                id: 2,
                title: 'Video course 1. Name tag',
                creationDate: '12.12.2001',
                duration: '60h',
                description: 'Бетономешалка мешает бетон, Бригада строителей жрет самогон. Прораб Петрович, в доску пьян, Спать устроился в мешалке, Электрик Степа пуск нажал На бетонной скороварке. Бригада строителей жрет самогон, В бетономешалке кровавый раствор. Тесто с мясом хорошо Здесь уже перемешалось Этим вкусным пирогом Вся бригада объедалась… Бетономешалка - алкоголизм Бетономешалка - каннибализм'
            }
        ];
    }

    ngOnInit() {
    }

}
