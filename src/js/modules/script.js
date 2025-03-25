// Определение устройства на странице
export function ckMobile() {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Android/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/Android/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
    }
  };
  if (isMobile.any()) {
    document.body.classList.add('_touch');
  

  } else {
    document.body.classList.add('_pc');
    
  }
}

const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');
const contactInfo = document.getElementById('contactInfo');
const body = document.body;

document.addEventListener('click', function (event) {
  if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
    navLinks.classList.remove('active');
    contactInfo.classList.remove('active');
    burgerMenu.classList.remove('open');
    body.classList.remove('blur');
    body.classList.remove('showmenu');
  }
});

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  contactInfo.classList.toggle('active');
  burgerMenu.classList.toggle('open');
  body.classList.toggle('blur');
  body.classList.toggle('showmenu');
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownLink = dropdown.querySelector('a');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 876) {
      e.preventDefault();
      dropdownContent.classList.toggle('show');
    }
  });
});


document.querySelectorAll('.Gfaq__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const answer = item.querySelector('.Gfaq__answer');

    if (item.classList.contains('Gfaq__item--active')) {
        answer.style.maxHeight = null;
        item.classList.remove('Gfaq__item--active');
    } else {
        document.querySelectorAll('.Gfaq__item--active').forEach(activeItem => {
            activeItem.querySelector('.Gfaq__answer').style.maxHeight = null;
            activeItem.classList.remove('Gfaq__item--active');
        });

        answer.style.maxHeight = answer.scrollHeight + "px";
        item.classList.add('Gfaq__item--active');
    }
  });
});


if (document.querySelector('.line-one')) {
  function replaceImagesOnResize() {
    const lineOne = document.querySelector('.line-one');
    const lineTwo = document.querySelector('.line-two');
    const desktopImgOne = 'img/line_one.png';
    const mobileImgOne = lineOne.getAttribute('data-mobile');
    const desktopImgTwo = 'img/line_two.png';
    const mobileImgTwo = lineTwo.getAttribute('data-mobile');

    if (window.innerWidth <= 960) {
      lineOne.src = mobileImgOne;
      lineTwo.src = mobileImgTwo;
    } else {
      lineOne.src = desktopImgOne;
      lineTwo.src = desktopImgTwo;
    }
  }

  // Запускаем при загрузке страницы
  document.addEventListener('DOMContentLoaded', replaceImagesOnResize);

  // Обновляем при изменении размера окна
  window.addEventListener('resize', replaceImagesOnResize);
}


