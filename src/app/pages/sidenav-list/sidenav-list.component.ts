import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() changeMode = new EventEmitter();
  @Output() changeLang = new EventEmitter();
  @Input() lang: String = '';
  @Input() mode: String = '';
  constructor() { }

  ngOnInit(): void {

  }

  onSidenavClose() {
    this.sidenavClose.emit(this.mode);
  }

  onChangeLang(lang: string) {
    this.changeLang.emit(lang);
  }

  onChangeMode() {
    this.changeMode.emit();
  }

}
