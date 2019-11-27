export interface Course {
    id: number;
    title: string;
    isFavorite: boolean;
    creationDate: string;
    duration: number;
    startDate: string;
    description: string;
}

export type CreateCourseType = Omit<Course, 'id' | 'isFavorite' | 'creationDate'>;

export type UpdateCourseType = Omit<Course, 'isFavorite' | 'creationDate'>;
