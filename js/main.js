var $body = $('.banner');
var $whiteheart;
var width = $body.outerWidth();
var height = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $whiteheart = $('<div>');
  $whiteheart.addClass('whiteheart');
  $whiteheart.css({
    top: Math.random() * height,
    left: (Math.random() * 100) + '%',
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });
  $body.append($whiteheart);
}
