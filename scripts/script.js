function openTab(tabId) {
    const tabContents = document.querySelectorAll(".about__division-content");
    tabContents.forEach(content => content.classList.remove("active-content"));

    const tabLinks = document.querySelectorAll(".about__tab-navigate");
    tabLinks.forEach(link => link.classList.remove("active-tabs"));

    document.getElementById(tabId).classList.add("active-content");
    document.getElementById(tabId.replace("item-content", "item")).classList.add("active-tabs");
}

const slides = document.querySelectorAll('.slider__inner');
const prevButton = document.querySelector('.human__arrow-left');
const nextButton = document.querySelector('.human__arrow-right');
let currentIndex = 0;

function humanSlide(index) {
    slides.forEach(slide => slide.classList.remove('active-human'));
    slides[index].classList.add('active-human');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    humanSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    humanSlide(currentIndex);
});

humanSlide(currentIndex);

const aboutDivisionPosts = document.querySelectorAll('.list');

aboutDivisionPosts.forEach(post => {
    const plusButton = post.querySelector('.about__division-post__plus');
    const list = post.querySelector('.list__hidden');

    plusButton.addEventListener('click', () => {
        list.classList.toggle('hidden');
    });
});

function showContent(contentId, tabId) {
    const contents = document.querySelectorAll('.footer-content');
    const tabs = document.querySelectorAll('.footer__tab-navigate');

    contents.forEach(content => content.classList.remove('active-content-footer'));
    tabs.forEach(tab => tab.classList.remove('active-tabs__footer'));

    document.getElementById(contentId).classList.add('active-content-footer');
    document.getElementById(tabId).classList.add('active-tabs__footer');
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalSuccess = document.getElementById("myModalSuccess");
    const closeButton = modal.querySelector(".close");
    const closeSuccess = modalSuccess.querySelector(".modal__button-success");
    const successButton = modal.querySelector(".modal__button");
    const openButton = document.querySelectorAll('.header__button');

    openButton.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = "block";
        });
    });

    function closeModal() {
        modal.style.display = "none";
        modalSuccess.style.display = "none";
    }

    closeButton.addEventListener('click', closeModal);
    closeSuccess.addEventListener('click', closeModal);

    successButton.addEventListener('click', event => {
        event.preventDefault();
        modal.style.display = "none";
        modalSuccess.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow__click__left');
    const baniTab = document.getElementById('about__bani-tab');
    const homeTab = document.getElementById('about__doma-tab');
    const baniTabs = document.getElementById('bani-carousel');
    const homeTabs = document.getElementById('doma-carousel');
    const arrowRight = document.querySelector('.arrow__click__right');
    const carousels = document.querySelectorAll('.carousel');
    const dots = document.querySelectorAll('.dots__tabs');
    const tabs = document.querySelectorAll('.project__tab-navigate');
    let currentSlideIndex = 0;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            baniTabs.style.display = 'none';
            baniTab.style.cssText = '' +
                'background: transparent;' +
                'border: 3px solid rgba(153, 153, 153, 1);' +
                'color:#fff;'
            homeTabs.style.cssText = 'display: none';
            homeTab.style.cssText = '' +
                'background: transparent;' +
                'border: 3px solid rgba(153, 153, 153, 1);' +
                'color:#fff;'
            if (tab === baniTab) {
                baniTabs.style.display = 'block'
                baniTab.style.cssText = '' +
                    'border: none;' +
                    'background-color: rgba(153, 153, 153, 1);' +
                    'color: rgba(33, 33, 33, 1);';
            } else if (tab === homeTab) {
                homeTabs.style.display = 'block'
                homeTab.style.cssText = '' +
                    'border: none;' +
                    'background-color: rgba(153, 153, 153, 1);' +
                    'color: rgba(33, 33, 33, 1);';
            }
        });
    });

    const showSlider = (currentSlideIndex) => {
        slides.forEach((item, index) => {
            if(index > 2) {
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }
        })
    }



    function switchCarousel(index) {
        carousels.forEach((carousel, i) => {
            if (i === index) {
                carousel.style.display = 'block';
                dots[i].classList.add('active__dot');
            } else {
                carousel.style.display = 'none';
                dots[i].classList.remove('active__dot');
            }
        });
    }

    arrowRight.addEventListener('click', function () {
        if (currentSlideIndex < slides.length - 3) {
            currentSlideIndex++;
            switchCarousel(currentSlideIndex);
        }
    });

    arrowLeft.addEventListener('click', function () {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            switchCarousel(currentSlideIndex);
        }
    });
    showSlider()
    switchCarousel(0);
});