import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {  gsap } from 'gsap';
import {  ScrollTrigger } from 'gsap/ScrollTrigger';
import {  DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  image_profile: string = './assets/images/profile/20220803_212041.jpg';
  flag: String = "./assets/images/media/reseaux/facebook.png";
  @ViewChild('heroes', {static: true}) heroes: ElementRef| undefined;
  @ViewChild('slide', {static: true}) slide: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('child', {static: true}) child: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('title', {static: true}) title: ElementRef<HTMLDivElement> | undefined;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.heroes);
    this.initScrollAnimations();
    this.initAnimations();
  }
  initScrollAnimations(): void {

  }
  initAnimations(): void {
    // console.log('appp')
    // let tl = gsap.timeline();
    // // @ts-ignore
    // tl.fromTo(this.heroes.nativeElement, 4, {height: '0%'}, {height: '100%'});
    // console.log('appp s')
  }

}
