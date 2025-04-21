const resumeBtn = document.querySelectorAll(".resume-btn")

resumeBtn.forEach((btn, idx) => {

    btn.addEventListener("click" , () => {
        const resumeDetail = document.querySelectorAll('.resume-detail')

        resumeBtn.forEach(btn => {
            btn.classList.remove('active')
        });
        btn.classList.add('active');

        resumeDetail.forEach(detail => {
            detail.classList.remove('active')
        })
        resumeDetail[idx].classList.add('active')
    } )
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;
 
const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide ");
    const portfolioDetails = document.querySelectorAll(".portfolio-detail");

    imgSlide.style.transform = `translateX(calc(${index * - 100}% - ${index * 2}rem))`

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    });
    portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if(index < 4) {
        index++;
        arrowLeft.classList.remove('disable')
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled')
    }
    activePortfolio()
})
arrowLeft.addEventListener('click', () => {
    if(index > 1) {
        index--;
        arrowRight.classList.remove('disable')
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled')
    }
    activePortfolio()
})

const navLinks = document.querySelectorAll("header nav a");
const logoLinks = document.querySelectorAll(".logo");
const section = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

const activePage = () => {

    const barsBox = document.querySelector(".bars-box");
    const header = document.querySelector("header");
    header.classList.remove("active");
    setTimeout(() => {
    header.classList.add("active");
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active')
    });
    
    barsBox.classList.remove('active')
    setTimeout(() => {
        barsBox.classList.add("active");
    }, 1100);

    section.forEach(section => {
        section.classList.remove('active')
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active')
            setTimeout(() => {
                section[idx].classList.add('active');
            }, 1100);
        }
    })
})
logoLinks.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add('active')
        setTimeout(() => {
          section[0].classList.add("active");
        }, 1100);
    }
})