import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  add: string = "assets/img/add1.png";
  delete: string = "assets/img/delete.jfif";
  constructor() { }

  ngOnInit(): void {
  }

}
