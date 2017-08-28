/*global $, jQuery*/

$(document).ready(function () {
  'use strict';

  /*sedona page-header menu button behaviour */
  
  $(window).resize(function () {
    var w = $(window).width();
    if (w < 768) {
      $('.main-nav__toggle-btn').show();
      if (w < 768 && $('.main-nav__list').hide()) {
        $('.main-nav__toggle-btn').removeClass('main-nav__toggle-btn--js-active');
        $('.main-nav__list').hide();
      } else if (w < 768 && $('.main-nav__list').show()) {
        $('.main-nav__toggle-btn').addClass('main-nav__toggle-btn--js-active');
      }
    } else if (w >= 768) {
      $('.main-nav__list').show();
      $('.main-nav__toggle-btn').hide();
    }
  });

  $('.main-nav__toggle-btn').on('click', function () {
    event.preventDefault();
    
    $('.main-nav__toggle-btn').toggleClass('main-nav__toggle-btn--js-active');
    $('.main-nav__list').slideToggle('slow');
  });
  
  
  /*sedona-form modal windows */
  $('.sedona-form__modal-win-btn').on('click', function () {
    $('.sedona-form__modal-win').fadeOut('fast');
    $('.sedona-form__overlay').hide();
  });
  
  function checkInput() {
    $('.sedona-form__js-form').find('.sedona-form__input--js-required').each(function () {
      if ($(this).val() === '') {
        $(this).addClass('sedona-form__input--error').prop('placeholder', 'Поле обязателно');
      } else if ($(this).val() !== '') {
        $(this).removeClass('sedona-form__input--error');
      }
    });
  }
  
  $('.sedona-form__submit').click(function (event) {
    event.preventDefault(event);
    $('.sedona-form__overlay').show();
    checkInput();
    if ($('.sedona-form__input--error').length > 0) {
      $('.sedona-form__submit').removeClass('error-state');
      $('.sedona-form__modal-win--error').fadeIn();
    } else if ($('.sedona-form__input--error').length === 0) {
      $('.sedona-form__modal-win--succsess').fadeIn();
      $('.sedona-form__modal-win-btn').on('click', function () {
        $('.sedona-form__js-form').submit();
      });
    }
  });
  
});
