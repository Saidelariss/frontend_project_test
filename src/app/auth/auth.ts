export const userList: User[] = [];

userList.push({username:"said",password : "said",fullName:"said el ariss"})
export interface User {
    username: string | null | undefined;
    password: string | null | undefined;
    fullName: string | null | undefined;
}