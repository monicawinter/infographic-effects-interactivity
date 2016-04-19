var $bigPresent = $('.big-present');
var $kiss = $('.kiss');
var $couple = $('.couple');
var $dog = $('.dog');
var $arrow = $('.arrow');
var $arrow2 = $('.arrow2');
var $arrow3 = $('.arrow3');

$bigPresent.waypoint(function (direction) {
  if (direction == 'down') {
    $bigPresent.addClass('js-present-animate');
  } else {
    $bigPresent.removeClass('js-present-animate');
  }
}, { offset: '50%' });

$kiss.waypoint(function (direction) {
  if (direction == 'down') {
    $kiss.addClass('js-kiss-animate');
  } else {
    $kiss.removeClass('js-kiss-animate');
  }
}, { offset: '63%' });

$couple.waypoint(function (direction) {
  if (direction == 'down') {
    $couple.addClass('js-couple-animate');
  } else {
    $couple.removeClass('js-couple-animate');
  }
}, { offset: '50%' });

$dog.waypoint(function (direction) {
  if (direction == 'down') {
    $dog.addClass('js-dog-animate');
  } else {
    $dog.removeClass('js-dog-animate');
  }
}, { offset: '50%' });

$arrow.waypoint(function (direction) {
  if (direction == 'down') {
    $arrow.addClass('arrow-animate');
  } else {
    $arrow.removeClass('arrow-animate');
  }
}, { offset: '100%' });

$arrow2.waypoint(function (direction) {
  if (direction == 'down') {
    $arrow2.addClass('arrow2-animate');
  } else {
    $arrow2.removeClass('arrow2-animate');
  }
}, { offset: '100%' });

$arrow3.waypoint(function (direction) {
  if (direction == 'down') {
    $arrow3.addClass('arrow3-animate');
  } else {
    $arrow3.removeClass('arrow3-animate');
  }
}, { offset: '100%' });
