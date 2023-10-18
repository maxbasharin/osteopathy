/*
 !(i)
 Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 Или когда импортирован весь файл, например import "files/script.js";
 Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 Если мы хотим добавить модуль следует его расскоментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules';
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================

const observer = lozad(); // lazy loads elements with default selector as ".lozad"
		observer.observe();
		// Initialize library
		lozad('.lozad', {
				load: function(el) {
						el.src = el.dataset.src;
						el.onload = function() {
								el.classList.add('fade')
						}
				}
		}).observe()


$('.diplom__slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<img class="diplom__slider-left" src="images/arrow-left.png" alt="">',
  nextArrow: '<img class="diplom__slider-right" src="images/arrow-right.png" alt="">',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
     
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }
  ]
});

$('.clients__slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  slidesToShow: 6,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
     
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      }
    }
  ]
});

$('.reviews__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  prevArrow: '<img class="clients__slider-left" src="images/arrow-left.png" alt="">',
  nextArrow: '<img class="clients__slider-right" src="images/arrow-right.png" alt="">',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }
  ]
});

$('.marquee__one').marquee({
  duration: 10000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true
});

$('.marquee__two').marquee({
  duration: 10000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'right',
  duplicated: true,
  pauseOnHover: true
});

$('.marquee__three').marquee({
  duration: 10000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true
});

$(document).ready(function () {
  $(".accordion-titel").click(function () {
    $(".accordion-item").removeClass("show")
    
    $(this).parent(".accordion-item").addClass("show");


    $(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
    $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
  });
});

$('.btn--education').click(function () {
  $.fancybox.open({
    src: '#form--education',
    type: 'inline'
  });
});

$('.btn--consultation').click(function () {
  $.fancybox.open({
    src: '#form--consultation',
    type: 'inline'
  });
});

$('.btn--requirements').click(function () {
  $.fancybox.open({
    src: '#form--requirements',
    type: 'inline'
  });
});

function zero_first_format(value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value;
}

function date_time() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  return day + "." + month;
}

$(".btn--curriculum").click(function () {
  $('html, body').animate({
    scrollTop: $(".curriculum").offset().top
  }, 1000);
});

new WOW().init();

jQuery(function($){
  $(".phone").mask("+7 (999) 999-99-99");
});

new window.JustValidate('.form--education', {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
    }
  },
  submitHandler: function (form, values, ajax) {
    ajax({
      url: 'https://web-apkipp.ru/b24connect/',
      method: 'POST',
      data: {
        'name': $('input#lead-fio-all').val(),
        'phone': $('input#lead-phone-all').val().replace(/\D+/g, "").replace(" ", ""),
        'email': $('input#lead-email-all').val(),
        'deal': 'Запрос с сайта',
        'source': '1',
        'course': 1,
        'comment': 'Комментарий'
      },
      async: true,
      callback: function (response) {
        $.fancybox.open({
          src: '#gratitude',
          type: 'inline'
        });
      },
      error: function (response) {
        alert('Ошибка подключения:' + response)
       
      }
    });
  },
});
new window.JustValidate('.form--consultation', {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
    }

  },
});


