gsap.set('#detailedSection', {visibility: 'hidden'})
gsap.defaults({
    autoRound: false,
    force3D: true
});

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

menu.addEventListener('mouseenter', () => {
    gsap.to('#menu span', {
        width: 6,
        height: 6,
        y: -3,
        duration: 0.1,
        stagger: 0.05,
        borderWidth: 1,
        force3D: true,
        ease: "none"
    })
});
menu.addEventListener('mouseleave', () => {
    gsap.to('#menu span', {
        width: 4,
        height: 4,
        y: 0,
        duration: 0.1,
        stagger: 0.05,
        borderWidth: 1.5,
        force3D: true,
        ease: "none"
    })
});
menu.addEventListener('click', () => {
    gsap.set('#detailedSection', {visibility: 'visible'})
    gsap.from('#detailedSection', {
        y: '50%',
        duration: 0.3,
    })
}) 
closeIcon.addEventListener('click', () => {
    gsap.to('#close-icon span', {
        // opacity: 0, 
        duration: 0.2,
        rotate: 0,
        stagger: 0.08,
    })
})


