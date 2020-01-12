import {Course as CourseInterface, AuthorType} from 'src/app/interfaces/course';

export class Course implements CourseInterface {
    public id: number;
    public name: string;
    public isTopRated: boolean;
    public creationDate: string;
    public length: number;
    public date: string;
    public description: string;
    public authors: AuthorType[];

    constructor({
        id,
        name,
        isTopRated,
        creationDate,
        length,
        description,
        authors
    }: CourseInterface) {
        this.id = id;
        this.name = name;
        this.isTopRated = isTopRated;
        this.creationDate = creationDate;
        this.length = length;
        this.date = this.date;
        this.description = description;
        this.authors = authors;
    }
}
