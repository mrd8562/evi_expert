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


document.addEventListener("DOMContentLoaded", () => {
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
});
