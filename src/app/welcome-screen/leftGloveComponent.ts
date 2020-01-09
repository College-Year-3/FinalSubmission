import {Component, ViewEncapsulation} from '@angular/core';
import {fade, leftGloveEnter} from '../animations';

@Component({
  selector: 'left-glove-component',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    fade,
    leftGloveEnter
  ],
  template: '<h3 class="center display-3" @fade style="right: 0px"> FIGHT</h3>' +
    '<img [lazyLoad]="imageLeft" class="glove left spaced" @leftGloveEnter>',
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
export class LeftGloveComponent {
  imageLeft = 'https://drive.google.com/uc?id=1QUqxNaxnPsOil3Ob6jzvIjuvl7VXEdLw';
}
