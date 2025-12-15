gsap.from('#intro', {
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    y: -20,
    scale: 0.9,
})
gsap.to('#intro', {
    opacity: 0,
    duration: 0.5,
    delay: 0.7,
    y: 20,
    scale: 0.9,
});

gsap.from('section', {
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
    y: 50,
    stagger: 0.1,
})
// function gsapInputAnimate(action){
//     if (action == 'show') {
//         gsap.set('#citylist-parent', {display: 'block'});
//         gsap.from('#citylist-parent', {
//             opacity: 0,
//             duration: 0.2,
//             y: -20,
//         });
//     } else if (action == 'hide') {
//         gsap.set('#citylist-parent', {display: 'none'});
//         gsap.to('#citylist-parent', {
//             opacity: 0,
//             duration: 0.2,
//             y: -20,
//         });
//     }
// }