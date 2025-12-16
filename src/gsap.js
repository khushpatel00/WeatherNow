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

gsap.from('.content', {
    opacity: 0,
    delay: 1.7,
    duration: 0.3,
    stagger: 0.05,
    y: 30,
})

gsap.from('.content-notranslate', {
    opacity: 0,
    delay: 2,
    duration: 0.3,
    stagger: 0.05,
})

document.querySelector('#menu').addEventListener('hover', () => {
    console.log('hovered on menu')
})