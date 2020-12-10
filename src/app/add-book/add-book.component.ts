import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Users } from '../User/users';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  temp: any = {};
  form: NgForm;
  user = Users;
  constructor(private rs: RestService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.user = form.value;

    this.rs.AddBook(this.user);
    alert("Book Successfully Added");
    this.router.navigate(['/rest'])
  }
 

  goBack(): void {
    this.location.back();
  }
}
