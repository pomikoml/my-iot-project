const flightPath = {
    curviness: 2,
    autoRotate: true,
    values: [
        {x: 50,y:-5},
        {x: 55,y:-50},
        {x: 60,y:-60},
        {x: 65,y:-70},
        {x: 50,y:-80},
        {x: 50,y:-150},
        {x: 50,y:-5},
        {x: 55,y:-50},
        {x: 60,y:-60},
        {x: 65,y:-70},
        {x: 50,y:-80},
        {x: 50,y:-150},
        //{x: window.innerWidth, y: -150}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.first-section', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '#green',
    duration: 300,
    trigerHook: 0.3
})
.setTween(tween)
.addIndicators()
.setPin('.first-section')
.addTo(controller);