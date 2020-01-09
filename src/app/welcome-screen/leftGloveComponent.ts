import {Component} from '@angular/core';
import {fade} from '../animations';

@Component({
  selector: 'left-glove-component',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    fade
  ],
  template: '<h3 class="center display-3" @fade style="right: 0px"> FIGHT</h3>' +
    '<img [lazyLoad]="imageLeft" class="glove left spaced">'
})
export class LeftGloveComponent {
  imageLeft = 'https://drive.google.com/uc?id=1TraUoOR5MZYmk3E3GDotxCmrV1VQb7BV';
}
