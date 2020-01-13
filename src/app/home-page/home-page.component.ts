import { Component, OnInit } from '@angular/core';
import {downwards_entry, fade, leftwards_entry, rightwards_entry} from '../animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    fade,
    leftwards_entry,
    rightwards_entry,
    downwards_entry
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
