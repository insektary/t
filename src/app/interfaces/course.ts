export interface AuthorType {
    id: number;
    name: string;
    lastName: string;
}

export interface Course {
    id: number;
    name: string;
    isTopRated: boolean;
    creationDate: string;
    length: number;
    date: string;
    description: string;
    authors: AuthorType[];
}

export type CreateCourseType = Omit<Course, 'id' | 'isTopRated' | 'creationDate'>;

export type UpdateCourseType = Omit<Course, 'isTopRated' | 'creationDate'>;
