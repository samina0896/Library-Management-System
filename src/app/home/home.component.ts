import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  lib3: string = "assets/img/lib10.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
