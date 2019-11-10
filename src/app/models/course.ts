import {Course as CourseInterface} from 'src/app/interfaces/course';

export class Course implements CourseInterface {
    public id: number;
    public title: string;
    public isFavorite: boolean;
    public creationDate: string;
    public duration: number;
    public startDate: string;
    public description: string;

    constructor({
        id,
        title,
        isFavorite,
        creationDate,
        duration,
        description
    }: CourseInterface) {
        this.id = id;
        this.title = title;
        this.isFavorite = isFavorite;
        this.creationDate = creationDate;
        this.duration = duration;
        this.startDate = this.startDate;
        this.description = description;
    }
}
