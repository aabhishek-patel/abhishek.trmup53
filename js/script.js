/*===========================toggle icon navbar========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*===========================scroll sections avtive Link========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================= sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========= remove toggle icon and navbar when click navbar link(scroll) ========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*======================= scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .heading2, .about-img2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about2-content, .services-container, .services-container-2,.portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .education-column', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .skills-column', { origin: 'right' });
 

/*======================= typed js ====================*/
var x = window.location.href;
if(!x.includes('service')) {
    const typed = new Typed('.multiple-text', {
        strings: ['Automation Tester', 'Web Designer', 'Traveller'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}



/*======================= Read More/Less ====================*/
let more = document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    });
}


  /*======================= Download Button ====================*/
  
  document.querySelectorAll('.cv').forEach(button => {

    let duration = 3000,
      svg = button.querySelector('svg'),
      svgPath = new Proxy({
        y: null,
        smoothing: null
      }, {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            svg.innerHTML = getPath(target.y, target.smoothing, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        }
      });

    button.style.setProperty('--duration', duration);

    svgPath.y = 20;
    svgPath.smoothing = 0;

    button.addEventListener('click', e => {

      e.preventDefault();

      if (!button.classList.contains('loading')) {

        button.classList.add('loading');

        gsap.to(svgPath, {
          smoothing: .3,
          duration: duration * .065 / 1000
        });

        gsap.to(svgPath, {
          y: 12,
          duration: duration * .265 / 1000,
          delay: duration * .065 / 1000,
          ease: Elastic.easeOut.config(1.12, .4)
        });

        setTimeout(() => {
          svg.innerHTML = getPath(0, 0, [
            [3, 14],
            [8, 19],
            [21, 6]
          ]);
        }, duration / 2);

      }

    });

  });

  function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = {
          length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing;
      return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    },
      cps = cp(a[i - 1], a[i - 2], point, false),
      cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  }

  function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
      [4, 12],
      [12, update],
      [20, 12]
    ],
      d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
  }



  /*======================= Bubbly button ====================*/
var animateButton = function (e) {

    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }