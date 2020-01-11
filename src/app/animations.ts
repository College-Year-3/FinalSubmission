import {animate, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate(2000)
  ])
]);

export let rightGloveEnter = trigger('rightGloveEnter', [
  state('void', style({transform: 'translateX(0) translateY(0)'})),
  transition(':enter', [
    style({transform: 'translateX(100%) translateY(-100%) rotate(-90deg)', opacity: 0}),
    animate(2000)
  ])
]);

export let leftGloveEnter = trigger('leftGloveEnter', [
  state('void', style({transform: 'translateX(0) translateY(0)'})),
  transition(':enter', [
    style({transform: 'translateX(-100%) translateY(-100%) rotate(90deg)', opacity: 0}),
    animate(2000)
  ])
]);
