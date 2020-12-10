import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  model: User = {
    email: '',
    password: ''

  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmitMember() {
    if (this.model.email == "ritika@gmail.com" && this.model.password == "Ritika123@"

      || this.model.email == "samina@gmail.com" && this.model.password == "Samina123@"

      || this.model.email == "ankita@gmail.com" && this.model.password == "Ankita123@"


      || this.model.email == "jayati@gmail.com" && this.model.password == "Jayati123@"
      || this.model.email == "diya@gmail.com" && this.model.password == "Diya123@") {
      this.router.navigate(['/home']);
    }

    else {
      alert("Enter Valid Details");
    }
  }

  onSubmitLibrarian() {
    if (this.model.email == "admin@gmail.com" && this.model.password == "Admin123@") { this.router.navigate(['/home']); }
    else {
      alert("Please Enter Valid Details");
    }
  }
}




