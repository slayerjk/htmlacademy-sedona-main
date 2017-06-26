/*global $, jQuery*/

$(document).ready(function () {
  'use strict';

  //event.preventDefault() polyfill for  IE9+
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };

  /*sedona page-header menu button behaviour */
  var
    ScreenWidth = screen.width,
    ScreenHeight = screen.height;

  if (ScreenWidth < '768') {
    $('.main-nav__list').hide();
    $('.main-nav__toggle-btn').show();
  }

  $('.main-nav__toggle-btn').on('click', function () {
    $('.main-nav__toggle-btn').toggleClass('main-nav__toggle-btn--js-active');
    $('.main-nav__list').slideToggle('slow');
  });

  /*sedona-form modal windows */
  $('.sedona-form__overlay, .sedona-form__modal-win').hide();
  $('.sedona-form__modal-win-btn').on('click', function () {
    $('.sedona-form__modal-win').fadeOut('fast');
    $('.sedona-form__overlay').hide();
  });

  $('.sedona-form__submit').click(function (e) {
    $('.sedona-form__input--js-required').each(function () {
      if (!$(this).val()) {
        $('.sedona-form__overlay').show();
        $('.sedona-form__modal-win--error').fadeIn('slow');
        $(this).addClass('sedona-form__input--error').prop('placeholder', 'Поле обязателно');
        $.fn.eventPreventDefaultSafe();
      } else {
        $.fn.eventPreventDefaultSafe();
        $('.sedona-form__overlay').show();
        $('.sedona-form__modal-win--succsess').fadeIn('slow');
        $('.sedona-form__modal-win-btn').on('click', function () {
          $('.sedona-form__js-form').submit();
        });
      }
    });
  });

});
