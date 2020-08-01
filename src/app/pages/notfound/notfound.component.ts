import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: [
    './error.component.css'
  ]
})
export class NotfoundComponent {

  year = new Date().getFullYear();

}
