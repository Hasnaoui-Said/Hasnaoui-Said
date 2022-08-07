import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'said-hasnaoui';
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
}
