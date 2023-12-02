import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userList } from '../auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    userForm = this.fb.group({
      username : ['' , Validators.required],
      password : ['' , Validators.required],
    })
    constructor(
      private fb : FormBuilder,
      private route : Router,
      private userService : UserService
      ){}

    onSubmit(){

     
      console.log(userList)
      let user = this.userService.userList.find(u => u.username === this.userForm.value.username && u.password ===  this.userForm.value.password);
      console.log("user " + user)
      if(user ){
          this.route.navigateByUrl("home/dashbord")
      }else {
        alert("bad credentials")
      }
    }
}
