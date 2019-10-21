import {User as UserInterface} from 'src/app/interfaces/user';

export class User implements UserInterface {
    public id: number;
    public firstName: string;
    public lastName: string;

    constructor({id, firstName, lastName}: UserInterface) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
