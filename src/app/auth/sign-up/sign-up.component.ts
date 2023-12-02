import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userList } from '../auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userForm = this.fb.group({
    username : ['' , Validators.required],
    password : ['' , Validators.required],
    fullName :  ['' , Validators.required],
  })
  constructor(private fb : FormBuilder,
              private route : Router,
              private userService: UserService){}

  onSubmit(){
    console.log("bonjour")
    
  this.userService.userList.push({
    username: this.userForm.value.username,
    fullName: this.userForm.value.fullName,
    password: this.userForm.value.password
  });

      console.log(userList)
    this.route.navigateByUrl("home/dashbord")
    // console.log(this.userForm.value);
  }

}
