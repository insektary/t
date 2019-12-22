export interface UserName {
    first: string;
    last: string;
}

export interface AuthData {
    id: number;
    token: string;
    name: UserName;
    login: string;
    password: string;
}
