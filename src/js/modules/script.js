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

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  contactInfo.classList.toggle('active');
  burgerMenu.classList.toggle('open');
  body.classList.toggle('blur');
});

// Получаем все элементы с классом dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// Проходим по каждому элементу dropdown
dropdowns.forEach(dropdown => {
  const dropdownLink = dropdown.querySelector('a');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  // Добавляем слушатель клика на ссылку внутри dropdown
  dropdownLink.addEventListener('click', (e) => {
    // Проверяем размер экрана (меньше 876px)
    if (window.innerWidth <= 876) {
      e.preventDefault(); // Предотвращаем переход по ссылке

      // Переключаем класс .show на dropdown-content
      dropdownContent.classList.toggle('show');
    }
  });
});
