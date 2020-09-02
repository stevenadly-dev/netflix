import { transition, query, animateChild } from "@angular/animations";
import { trigger, state, style, animate } from "@angular/animations";

export const FadeIN = trigger("fadeIn", [
  state("void", style({ opacity: 0, transform: "translateY(50px)" })),
  transition(":enter,:leave", [animate(".5s")]),
]);

export const FadeIN2 = trigger("fadeIn2", [
  transition("void => *", [
    style({
      opacity: 1,
      transform: "translateX(50px)",
      background: "yellow",
    }),
    animate(
      500,
      style({ opacity: 1, transform: "translateX(0px)", background: "orange" })
    ),
  ]),

  transition("* => void", [
    style({
      opacity: 1,
      transform: "translateX(0px)",
      background: "black",
    }),
    animate(
      500,
      style({ opacity: 1, transform: "translateY(-20px)", background: "white" })
    ),
  ]),

  // transition("exit=>entry", [
  //   animate(
  //     "5s",
  //     style({
  //       opacity: 0,
  //       transform: "translateY(50px)",
  //     })
  //   ),
  // ]),
  // state(
  //   "exit",
  //   style({
  //     background: "brown",
  //   })
  // ),
]);

export const popupParent = [
  trigger("popupParent", [
    transition(":enter", [
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 })),

      query("@popupChild", [animateChild()]),
    ]),
    transition(":leave", [
      style({ opacity: 1 }),
      animate(1000, style({ opacity: 0 })),
    ]),
  ]),

  trigger("popupChild", [
    transition(":enter", [
      style({ transform: "translateX(50px)" }),
      animate(3000, style({ transform: "translateX(0)" })),
    ]),
    transition(":leave", [
      animate(1000, style({ transform: "translateY(-50px)" })),
    ]),
  ]),
];

export const routingAnimation = trigger("routingAnimation", [
  // void => *
  transition("*<=>*", [
    style({
      transform: "translateX(100px)",
      opacity: 0,
    }),
    animate(
      500,
      style({
        transform: "translateX(0)",
        opacity: 1,
      })
    ),
  ]),
]);

export const errorMsg = trigger("errorMsg", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("1s ease-in-out", style({ opacity: 1 })),
  ]),
  transition(":leave", [animate("1s ease-in-out", style({ opacity: 0 }))]),
]);
