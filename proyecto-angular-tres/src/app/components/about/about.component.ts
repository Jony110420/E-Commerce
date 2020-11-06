import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	public title: string;
  	public subtitle: string;
  	public web: string;
  constructor() { 
  	this.title = "Jonathan Alexis";
  	this.subtitle = "Desarrollador web y Gamer";
  	this.web = "AlexCORP.es";
  }

  ngOnInit(): void {
  }

}
 