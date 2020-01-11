import { Component, OnInit, HostBinding } from '@angular/core';
import {fade, rightGloveEnter} from '../animations';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    fade
  ]
})
export class WelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
