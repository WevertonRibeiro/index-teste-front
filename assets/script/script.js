const header = document.querySelector('.header');

function fixedOnScroll() {
    if (window.pageYOffset > 100) {
        header.classList.add('fixed')
    } else if (window.pageYOffset < 50) {
        header.classList.remove('fixed')
    }
}

window.addEventListener('scroll', fixedOnScroll);

$(document).on("ready", function () {
    $(".slide").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
});

function openMenuMobile() {
    const menu = document.querySelector('.menu-mobile-wrapper')
    const body = document.querySelector('.body')
    body.style.overflow = "hidden"
    menu.classList.add('active')
}
function closeMenuMobile() {
    const menu = document.querySelector('.menu-mobile-wrapper')
    const body = document.querySelector('.body')
    body.style.overflow = "unset"
    menu.classList.remove('active')
}
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
openBtn.addEventListener('click', openMenuMobile)
closeBtn.addEventListener('click', closeMenuMobile)

const elements = document.querySelectorAll('.scroll')
if (elements.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animateScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top - windowHalf
            if (elementTop < 0) {
                element.classList.add('active')
            }
        })
    }
    animateScroll()
    window.addEventListener('scroll', animateScroll)
}