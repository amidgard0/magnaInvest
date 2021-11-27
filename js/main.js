"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

$(function () {
  var $videoContainer = $('#video'),
      $videoControls = $('.video-control'),
      $video = $('#myVideo')[0];
  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing'); //  возвращаем постер

      $video.load();
    }
  });
});
var cabinetHeaderBtn = document.querySelector(".cabinet__header-btn");
var headerSidebar = document.querySelector(".header__sidebar ");
var headerCabinet = document.querySelector(".header-cabinet__wrapper");
var arrowLeft = document.querySelector('.arrow__left');
var mainContent = document.querySelectorAll('.main__content');
cabinetHeaderBtn.addEventListener('click', function () {
  headerSidebar.classList.toggle('hiddden');
  headerCabinet.classList.toggle('header__hidden');
  arrowLeft.classList.toggle('arrow__rotate');
  mainContent.forEach(function (element) {
    element.classList.toggle('header__hidden');
  });
});
var menuSideBar = document.querySelectorAll('.main__menu-item');
menuSideBar.forEach(function (e) {
  e.addEventListener('click', function () {
    menuSideBar.forEach(function (item) {
      item.classList.remove('active');
    });
    e.classList.add('active');
  });
});
var tabsParners = document.querySelectorAll('.btn--partners__tabs');
tabsParners.forEach(function (e) {
  e.addEventListener('click', function () {
    tabsParners.forEach(function (item) {
      item.classList.remove('partners__active');
    });
    e.classList.add('partners__active');
  });
});
var burger = document.querySelector('.burger');
var closeBurger = document.querySelector('.mobile__sidebar-btn--close');
var mobileSideBar = document.querySelector('.mobile__sidebar');
var body = document.querySelectorAll('.body');
burger.addEventListener('click', function () {
  mobileSideBar.classList.add('mobile__sidebar--active');
  body.forEach(function (e) {
    e.classList.add('body-lock');
  });
});
mobileSideBar.addEventListener('click', function () {
  mobileSideBar.classList.remove('mobile__sidebar--active');
  body.forEach(function (e) {
    e.classList.remove('body-lock');
  });
});
var text = document.getElementById('user__link-copy');
var btn = document.getElementById('copy__button');
/* вызываем функцию при нажатии на кнопку */

btn.addEventListener('click', function () {
  text.select();
  document.execCommand("copy");
});
new WOW().init();
//# sourceMappingURL=main.js.map
