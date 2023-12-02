import { Injectable } from '@angular/core';
import { User } from '../auth/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
   userList: User[] = [];

}

