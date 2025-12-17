if (window.innerWidth < 1024) {
    gsap.set('#detailedSection', { visibility: 'hidden', opacity: 0 })
}
else {
    gsap.set('#detailedSection', { visibility: 'visible', opacity: 1 })
}
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1024) {
        gsap.set('#detailedSection', { visibility: 'hidden', opacity: 0 })
    }
    else {
        gsap.set('#detailedSection', { visibility: 'visible', opacity: 1 })
    }
})

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
    gsap.set('#detailedSection', { visibility: 'visible', opacity: 1 });
    gsap.fromTo('#detailedSection', {
        y: '50%',
        duration: 0.3,
    }, {
        y: 0
    })
    gsap.to('#close-icon .line1', {
        rotate: '45deg',
        duration: 0.2,
        delay: 0.5,
    })
    gsap.to('#close-icon .line2', {
        rotate: '-45deg',
        duration: 0.2,
        delay: 0.58,
    })
})
closeIcon.addEventListener('click', () => {
    setTimeout(gsap.to('#close-icon span', {
        // opacity: 0, 
        duration: 0.2,
        rotate: '0deg',
        stagger: 0.08,
    }), 200)
    gsap.to('#detailedSection', {
        y: '50%',
        delay: 0.2,
        duration: 0.3,
        opacity: 0,
    })
    gsap.set('#detailedSection', { visibility: 'invisible' });
})