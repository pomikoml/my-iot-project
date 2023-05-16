
$(document).ready(function(){
    
/*document.addEventListener('DOMContentLoaded', () =>{*/
    var controller = new ScrollMagic.Controller();

    var timeline = new TimelineMax();
    timeline
    .to('.section_1_01', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_02', 4, {
        y: 150,
        x: 250,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_03', 4, {
        y: -180,
        x: 250,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_04', 4, {
        y: 140,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_05', 4, {
        y: -250,
        x: 230,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_06', 4, {
        y: 50,
        x: -300,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_07', 4, {
        y: 10,
        x: 250,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_08', 4, {
        y: 235,
        x: 250,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_09', 4, {
        y: 200,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    

    var scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0.3,
        offset: '300'
    })
    .setTween(timeline)
    
    .setPin('.first-section')
    .addTo(controller);

    
    
    let timeline2 = new TimelineMax();
    timeline2
    .to('.section_2_01', 4, {
        y: -220,
        ease: Power3.easeInOut
    })
    .to('.section_2_02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_2_03', 4, {
        y: -160,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_2_04', 4, {
        y: -130,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_2_05', 4, {
        y: -80,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_2_06', 4, {
        y: -30,
        ease: Power3.easeInOut
    }, '-=4')

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0.55,
        offset: '200',
        width: '100%',
        
    })
    .setTween(timeline2)
    
    .setPin('.second-section')
    .addTo(controller);


    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 4, {
        x: -221,
        y: -154,
        ease: Power3.easeInOut,
        rotation: 345
    })
    .to('.section_3_02', 4, {
        x: 162,
        y: -160,
        ease: Power3.easeInOut,
        rotation: 75
    }, '-=4')
    .to('.section_3_03', 4, {
        x: -20,
        y: -154,
        ease: Power3.easeInOut,
        
    }, '-=4')
    .to('.section_3_04', 4, {
        x: -134,
        y: 9,
        ease: Power3.easeInOut,
        rotation: 215
        
    }, '-=4')
    .to('.section_3_05', 4, {
        x: 160,
        y: 75,
        ease: Power3.easeInOut,
        rotation: 450
        
    }, '-=4')
    .to('.section_3_06', 4, {
        x: -24,
        y: 130,
        ease: Power3.easeInOut,
        rotation: 245
        
    }, '-=4')
    .to('.section_3_07', 4, {
        
        ease: Power3.easeInOut,
        rotation: 360
        
    }, '-=4')
    .to('.section_3_08', 4, {
        x: 105,
        y: -40,
        ease: Power3.easeInOut,
        rotation: 420
        
    }, '-=4')
    .to('.section_3_09', 4, {
        x: -106,
        y: 90,
        ease: Power3.easeInOut,
        rotation: 690
        
    }, '-=4')
    .to('.section_3_10', 4, {
        x: -79,
        y: -75,
        ease: Power3.easeInOut,
        rotation: 360
        
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200',
        width: '100%',
        
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);


    let timeline4 = new TimelineMax();
    timeline4
    .to('.section_4_01', 4, {
        x: -10,
        ease: Power3.easeInOut
    })
    .to('.section_4_02', 4, {
        x: -170,
        y: 20,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_4_03', 4, {
        x: -235,
        y: 0,
        ease: Power3.easeInOut
        
    }, '-=4')
    .to('.section_4_04', 4, {
        x: -280,
        y: -15,
        ease: Power3.easeInOut

    }, '-=4')
    .to('.section_4_05', 4, {
        x: 170,
        y: 20,
        ease: Power3.easeInOut
        
    }, '-=4')
    .to('.section_4_06', 4, {
        x: 235,
        y: 0,
        ease: Power3.easeInOut
        
    }, '-=4')
    .to('.section_4_07', 4, {
        x: 280,
        y: -15,
        ease: Power3.easeInOut
        
        
    }, '-=4')

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.four-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200',
        width: '100%',
        
    })
    .setTween(timeline4)
    .setPin('.four-section')
    .addTo(controller);
  
})

var audio = document.getElementById("myAudio");
var isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function playAudio() {
  audio.play();
  isPlaying = true;
  document.getElementById("play-icon").src = "pause.png";
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  document.getElementById("play-icon").src = "play.png";
}



var scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
