import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

/*------------------------------------------------------*/
/*  SlideInAnimation: Animates on a Route Change        */
/*  Source: https://angular.io/guide/route-animations   */
/*------------------------------------------------------*/

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden auto' 
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])       
  ]);


/*---------------------------------------------------------------------------------*/
/*  SimpleFadeAnimation: FadesIn from the MainPage                                 */
/*  Source: https://www.kdechant.com/blog/angular-animations-fade-in-and-fade-out  */
/*---------------------------------------------------------------------------------*/
  export const simpleFadeAnimation =
  trigger('simpleFadeAnimation', [
    state('in', style({opacity: 1})),
    transition('MainPage=>*', [
      style({opacity: 0}),
      animate('600ms')
    ]),
    transition("*=>MainPage", [
      animate('600ms', style({ opacity: 0}))
      ])
  ]);