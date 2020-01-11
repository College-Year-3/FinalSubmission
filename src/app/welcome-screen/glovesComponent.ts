import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  template: '<div>' +
    '<left-glove-component class="gloveBox"></left-glove-component>' +
    '<right-glove-component class="gloveBox"></right-glove-component>' +
    '</div>',
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'gloves-component'
})

export class GlovesComponent {

}
