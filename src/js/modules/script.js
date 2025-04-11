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


// Faq
document.querySelectorAll('.gfaq__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const answer = item.querySelector('.gfaq__answer');

    if (item.classList.contains('gfaq__item--active')) {
        answer.style.maxHeight = null;
        item.classList.remove('gfaq__item--active');
    } else {
        document.querySelectorAll('.gfaq__item--active').forEach(activeItem => {
            activeItem.querySelector('.gfaq__answer').style.maxHeight = null;
            activeItem.classList.remove('gfaq__item--active');
        });

        answer.style.maxHeight = answer.scrollHeight+40 + "px";
        item.classList.add('gfaq__item--active');
    }
  });
});


// Line Services Urlica
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

if (document.querySelector('.lines-more')) {
  function replaceImagesOnResize() {
    const linesMore = document.querySelector('.lines-more');
    const desktopImgMore = 'img/lines-more.png';
    const mobileImgOne = linesMore.getAttribute('data-mobile');

    if (window.innerWidth <= 960) {
      linesMore.src = mobileImgOne;
    } else {
      linesMore.src = desktopImgMore;
    }
  }

  // Запускаем при загрузке страницы
  document.addEventListener('DOMContentLoaded', replaceImagesOnResize);

  // Обновляем при изменении размера окна
  window.addEventListener('resize', replaceImagesOnResize);
}

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll(".tab");
  const indicator = document.getElementById("indicator");
  const tabContents = document.querySelectorAll(".tab-content");

  // Проверяем, существуют ли элементы на странице
  if (!tabs.length || !indicator || !tabContents.length) {
    // console.error('Не найдены необходимые элементы для работы табов');
    return;
  }

  function setIndicator(el) {
    if (!el || !indicator) return;

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const activeTab = document.querySelector(".tab.active");
      const activeContent = document.querySelector(".tab-content.active");

      // Проверяем наличие элементов перед работой с ними
      if (activeTab) activeTab.classList.remove("active");
      if (activeContent) activeContent.classList.remove("active");

      tab.classList.add("active");
      setIndicator(tab);

      const tabId = tab.getAttribute('data-tab');
      if (tabId) {
        const content = document.getElementById(tabId);
        if (content) content.classList.add('active');
      }
    });
  });

  // Инициализация при загрузке
  const activeTab = document.querySelector(".tab.active");
  if (activeTab) setIndicator(activeTab);

  indicator.addEventListener('click', () => {
    indicator.previousSibling.previousSibling.classList.toggle('hidden');
    indicator.previousSibling.previousSibling.previousSibling.previousSibling.classList.toggle('hidden');
    indicator.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.classList.toggle('pb0');
  })
});


document.addEventListener('DOMContentLoaded', function () {
  // 1. Находим все необходимые элементы
  const cityItems = document.querySelectorAll('li[data-link]');
  const otherCityItems = document.querySelectorAll('li:not([data-link])');
  const iframe = document.querySelector('.map-block iframe');
  const cityText = document.getElementById('cityText');

  // 2. Проверяем, что все элементы существуют
  if (!iframe) {
    // console.error('Ошибка: не найден iframe с картой');
    return;
  }

  if (!cityText) {
    // console.error('Ошибка: не найден элемент для отображения города');
    return;
  }

  // 3. Функция для изменения города
  function changeCity(link, cityName, element) {
    // Меняем карту (только если есть ссылка)
    if (link) {
      iframe.src = link;
    }

    // Меняем текст города
    cityText.textContent = `г. ${cityName}`;

    // Удаляем класс .bold у всех городов
    document.querySelectorAll('li').forEach(li => {
      li.classList.remove('bold');
    });

    // Добавляем класс .bold к выбранному городу
    if (element) {
      element.classList.add('bold');
    }
  }

  // 4. Обработчики для городов с data-link
  cityItems.forEach(item => {
    item.addEventListener('click', function () {
      const link = this.getAttribute('data-link');
      const cityName = this.textContent;
      changeCity(link, cityName, this);
    });
  });

  // 5. Обработчики для городов без data-link
  otherCityItems.forEach(item => {
    item.addEventListener('click', function () {
      const cityName = this.textContent;
      changeCity(null, cityName, this); // передаем null вместо ссылки
    });
  });

  // 6. Инициализация начального состояния (Воронеж)
  const initialCity = document.querySelector('li.bold[data-link]');
  if (initialCity) {
    const link = initialCity.getAttribute('data-link');
    const cityName = initialCity.textContent;
    changeCity(link, cityName, initialCity);
  }
});
