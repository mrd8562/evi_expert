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
  if (burgerMenu) {
    navLinks.classList.toggle('active');
    contactInfo.classList.toggle('active');
    burgerMenu.classList.toggle('open');
    body.classList.toggle('blur');
    body.classList.toggle('showmenu');
  }
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownLink = dropdown.querySelector('.arrow-down');
  const hashLink = dropdown.querySelector('a[href="#"]');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  const toggleMenu = (e) => {
    if (window.innerWidth <= 876) {
      e.preventDefault();
      dropdownContent.classList.toggle('show');
    }
  };

  if (dropdownLink) {
    dropdownLink.addEventListener('click', toggleMenu);
  }

  if (hashLink) {
    hashLink.addEventListener('click', toggleMenu);
  }
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

// Urlica Tab
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll(".tab");
  const indicator = document.getElementById("indicator");
  const tabContents = document.querySelectorAll(".tab-content");

  if (!tabs.length || !indicator || !tabContents.length) {
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

  const activeTab = document.querySelector(".tab.active");
  if (activeTab) setIndicator(activeTab);

  indicator.addEventListener('click', () => {
    indicator.previousSibling.previousSibling.classList.toggle('hidden');
    indicator.previousSibling.previousSibling.previousSibling.previousSibling.classList.toggle('hidden');
    indicator.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.classList.toggle('pb0');
  })
});


document.addEventListener('DOMContentLoaded', function () {
  const cityItems = document.querySelectorAll('li[data-link]');
  const otherCityItems = document.querySelectorAll('ul.city li:not([data-link])');
  const iframe = document.querySelector('.map-block iframe');
  const cityText = document.getElementById('cityText');

  if (!iframe) {
    return;
  }

  if (!cityText) {
    return;
  }

  function changeCity(link, cityName, element) {
    if (link) {
      iframe.src = link;
    }

    cityText.textContent = `г. ${cityName}`;

    document.querySelectorAll('li').forEach(li => {
      li.classList.remove('active');
    });

    if (element) {
      element.classList.add('active');
    }
  }

  cityItems.forEach(item => {
    item.addEventListener('click', function () {
      const link = this.getAttribute('data-link');
      const extCityName = this.getAttribute('data-ext');
      changeCity(link, extCityName, this);
    });
  });

  otherCityItems.forEach(item => {
    item.addEventListener('click', function () {
      const cityName = this.textContent;
      changeCity(null, cityName, this);
    });
  });

  const initialCity = document.querySelector('li.active[data-link]');
  if (initialCity) {
    const link = initialCity.getAttribute('data-link');
    const extCityName = initialCity.getAttribute('data-ext');
    changeCity(link, extCityName, initialCity);
  }
});

function setupModal(modalId) {
  const modal = document.getElementById(modalId);
  const openBtns = document.querySelectorAll(`[data-modal="${modalId}"]`);

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

}

// Инициализация модальных окон
setupModal('modal-1');
setupModal('modal-2');
setupModal('modal-ok');
setupModal('modal-fail');
setupModal('modal-spam');

// Закрытие при нажатии Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});


document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
  });
});

const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Показываем/скрываем кнопку при прокрутке
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

// Плавная прокрутка при клике
scrollToTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const logo = document.querySelector('.logo');

if (logo) {
  logo.addEventListener('click', function(e) {
    document.cookie = `user_city=Москва; path=/; max-age=${30 * 24 * 60 * 60}`;
  })
}