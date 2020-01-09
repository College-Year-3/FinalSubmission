import {Component} from '@angular/core';
import {fade, rightGloveEnter} from '../animations';

@Component({
  selector: 'right-glove-component',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    fade,
    rightGloveEnter
  ],
  template: '<h3 class="center display-3" @fade> VIEWER</h3>' +
    '<img [lazyLoad]="imageRight" class="glove" @fade>'
})
export class RightGloveComponent {
  imageRight = 'https://drive.google.com/uc?id=165yb5bm7z1ytF7yzqLV9hSOx7o6HyKj8';
}
