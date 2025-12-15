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

