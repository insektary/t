export interface Course {
    id: number;
    name: string;
    isTopRated: boolean;
    creationDate: string;
    length: number;
    date: string;
    description: string;
}

export type CreateCourseType = Omit<Course, 'id' | 'isTopRated' | 'creationDate'>;

export type UpdateCourseType = Omit<Course, 'isTopRated' | 'creationDate'>;
