import {Course as CourseInterface} from 'src/app/interfaces/course';

export class Course implements CourseInterface {
    public id: number;
    public title: string;
    public creationDate: string;
    public duration: string;
    public description: string;

    constructor({
        id,
        title,
        creationDate,
        duration,
        description
    }) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}
