import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() toggle = new EventEmitter();


  onToggle() {
    this.toggle.emit();
  }


}
