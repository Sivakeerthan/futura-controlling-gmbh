import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

/*------------------------------------------------------*/
/*  SlideInAnimation: Animates on a Route Change        */
/*  Source: https://angular.io/guide/route-animations   */
/*------------------------------------------------------*/

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('EntryPage => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden' 
        })
      ], {optional: true}),
      query(':enter', [
        style({ left: '100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          style({display: 'none', opacity: '0'})      
        ], {optional: true}),
        query(':enter', [
          style({display: 'flex', opacity: '1'})
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),      
    ]),   
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden' 
        })
      ], {optional: true}),
      query(':enter', [
        style({ left: '100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '-100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%' }))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])    
  ]);


/*---------------------------------------------------------------------------------*/
/*  SimpleFadeAnimation: FadesIn from the MainPage                                 */
/*  Source: https://www.kdechant.com/blog/angular-animations-fade-in-and-fade-out  */
/*---------------------------------------------------------------------------------*/
  export const simpleFadeAnimation =
  trigger('simpleFadeAnimation', [
    state('true', style({opacity: 1})),
    state('false', style({opacity: 0})),
    transition('true<=>false', [
      animate('300ms')
    ])
  ]);