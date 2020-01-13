import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate(4000)
  ])
]);


export let leftwards_entry = trigger('leftwards_entry', [
  state('void', style({transform: 'translateX(0)'})),
  transition(':enter', [
    style({transform: 'translateX(-100%) rotate(360deg)', opacity: 0}),
    animate(2000)
  ])
]);


export let rightwards_entry = trigger('rightwards_entry', [
  state('void', style({transform: 'translateX(0)'})),
  transition(':enter', [
    style({transform: 'translateX(100%) rotate(-360deg)', opacity: 0}),
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

export let downwards_entry = trigger('downwards_entry', [
  state('void', style({transform: 'translateY(0)'})),
  transition(':enter', [
    style({transform: 'translateY(100%)', opacity: 0}),
    animate(2000)
  ])
]);

const list_animation = trigger('list_animation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);
