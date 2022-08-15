import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lang: String = localStorage.getItem('language') ?? 'en';
  mode: String = localStorage.getItem('mode') ?? 'dark';

  constructor(private translate: TranslateService,
              private _formBuilder: FormBuilder,
              private modalService: NgbModal) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }


  public open(modal: any): void {
    this.modalService.open(modal);
  }
  onChangeMode(mode: string) {
    if (mode === 'dark')
      localStorage.setItem('mode', 'light');
    else
      localStorage.setItem('mode', 'dark');
  }
  changeLang(lang: string) {
    localStorage.setItem('language', lang);
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
