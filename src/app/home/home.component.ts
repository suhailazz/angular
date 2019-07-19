import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [];
  hedings : string[] =['Keep your skin radiant this winter.', 'Created from natural herbs – Ginseng roots extract.', 'Provide treatments and products that are safe, sanitary, and effective.', 'Quantity product from BB Wellness & Spa'];
  
  constructor() { }

  ngOnInit() {
    
  }

}
