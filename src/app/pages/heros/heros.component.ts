import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  image_profile: string = './assets/profile/20220803_212041.jpg';
  flag: String = "./assets/media/reseaux/facebook.png";
  constructor() { }

  ngOnInit(): void {
  }

}
