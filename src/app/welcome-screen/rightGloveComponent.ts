import {Component, ViewEncapsulation} from '@angular/core';
import {fade, rightGloveEnter} from '../animations';

@Component({
  selector: 'right-glove-component',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    fade,
    rightGloveEnter
  ],
  template: '<h3 class="center display-3" @fade> VIEWER</h3>' +
    '<img [lazyLoad]="imageRight" class="glove" @rightGloveEnter>',
  encapsulation: ViewEncapsulation.None,
  styles: [
    '.glove{\n' +
    '  width: 75%;\n' +
    '  height: 75%;\n' +
    '}',
    '.gloveBox{\n' +
    '  max-width: 50%;\n' +
    '  max-height: 50%;\n' +
    '  display: inline-block;\n' +
    '  text-align: center;\n' +
    '}'
  ]
})
export class RightGloveComponent {
  imageRight = 'https://drive.google.com/uc?id=1spA2TMwuy3sqUcZJcztK0o32DDwMWVds';
}
