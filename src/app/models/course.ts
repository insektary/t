import {Course as CourseInterface} from 'src/app/interfaces/course';

export class Course implements CourseInterface {
    public id: number;
    public title: string;
    public creationDate: string;
    public duration: string;
    public startDate: string;
    public description: string;

    constructor({
        id,
        title,
        creationDate,
        duration,
        description
    }: CourseInterface) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.startDate = this.startDate;
        this.description = description;
    }
}
