//botão dark/light-mode

document.addEventListener('DOMContentLoaded', (_event) => {
    const toggleButton = document.querySelector('#mode-toggle');


    toggleButton.addEventListener('click', () => {
        console.log('botao ok')
        document.body.classList.toggle('dark-mode');
    });
});

//carrossel imagens animais
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width;

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * imageWidth;
        track.style.transform = `translateX(${offset}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 2) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupClose = document.querySelector('.popup-close');

    images.forEach(image => {
        image.addEventListener('click', () => {
            popup.style.display = 'block';
            popupImg.src = image.src;
        });
    });
    const closePopup = () => {
        popup.style.display = 'none';
    };

    popupClose.addEventListener('click', closePopup);

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});

//carrossel imagens banner
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track1');
    const prevButton = document.querySelector('.prev-button1');
    const nextButton = document.querySelector('.next-button1');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width;

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * imageWidth;
        track.style.transform = `translateX(${offset}px)`;
    };

    const nextImage = () => {
        if (currentIndex < images.length -1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    };
    
    const prevImage = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        updateCarousel();
    };
    nextButton.addEventListener('click', nextImage);

    prevButton.addEventListener('click', prevImage);

    setInterval(nextImage, 5000);
});