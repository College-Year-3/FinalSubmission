import {animate, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate(2000)
  ])
]);

export let rightGloveEnter = trigger('rightGloveEnter', [
  state('void', style({right: 100})),
  transition(':enter', [
    style({right: 0}),
    animate(4000)
  ])
]);
