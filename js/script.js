// owl carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// sweetalert
$(document).ready(function () {
  $('.form').on('submit', function () {
    swal({
      title: 'Thank you!',
      text: 'The page will reload shortly...',
      icon: 'success',
      closeOnClickOutside: !1,
      buttons: !1,
    });
  });
});

// focus on .name when I click .hero-btn
document.querySelector('.hero-btn').addEventListener('click', function () {
  document.querySelector('.name').focus();
});

// Initialize AOS
AOS.init({
  startEvent: "load",
});
