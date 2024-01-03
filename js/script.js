$(function () {
  AOS.init();
  $('.customerFeedback').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<span class="PrevArrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
    nextArrow: '<span class="NextArrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
  });
  const menu = document.querySelector('.menu');
  document.querySelector('.hamburger-button').addEventListener('click', function () {
    this.classList.toggle('open');
    menu.classList.add('show');
  });
  document.querySelector('.closeIcon').addEventListener('click', function () {
    menu.classList.remove('show');
  });
  const menuItems = document.querySelectorAll('.menuItems');
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      // Run your function when any item is clicked
      removeClassFunc();
    });
  });
  function removeClassFunc() {
    menu.classList.remove('show');
  }
})