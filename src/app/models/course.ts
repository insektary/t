import {Course as CourseInterface} from 'src/app/interfaces/course';

export class Course implements CourseInterface {
    public id: number;
    public name: string;
    public isTopRated: boolean;
    public creationDate: string;
    public length: number;
    public date: string;
    public description: string;

    constructor({
        id,
        name,
        isTopRated,
        creationDate,
        length,
        description
    }: CourseInterface) {
        this.id = id;
        this.name = name;
        this.isTopRated = isTopRated;
        this.creationDate = creationDate;
        this.length = length;
        this.date = this.date;
        this.description = description;
    }
}
