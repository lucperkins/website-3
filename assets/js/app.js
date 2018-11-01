function navbarBurgerToggle() {
  const burger = $('.navbar-burger'),
        menu   = $('.navbar-menu');

  burger.click(function() {
    [burger, menu].forEach(function(el) {
      el.toggleClass('is-active');
    });
  });
}

function fixUponScroll() {
  const topMargin = 120,
        threshold = $('.is-docs-article').offset().top - topMargin,
        toc       = $('.toc');

  console.log(threshold);

  $(window).scroll(function() {
    if ($(document).scrollTop() > threshold) {
      toc.css('top', `${topMargin}px`);
      toc.addClass('is-fixed');
    } else {
      toc.removeClass('is-fixed');
    }
  });
}

$(function() {
  navbarBurgerToggle();
  fixUponScroll();
});