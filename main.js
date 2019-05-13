$('.next').click(function(){

  var img_current = $('.visibile');
  var space_current = $('.indicatore');

  var next_img = img_current.next('img');
  var next_space = space_current.next('div');

  img_current.toggleClass('visibile');
  space_current.toggleClass('indicatore');

  if(next_img.length != 0) {
    next_img.toggleClass('visibile');
    next_space.toggleClass('indicatore');

  } else {
    $('.slider img').first().toggleClass('visibile');
    $('.pianta div').first().toggleClass('indicatore');
  }

});

$('.prev').click(function(){

  var img_current = $('.visibile');
  var space_current = $('.indicatore');

  var prev_img = img_current.prev('img');
  var prev_space = space_current.prev('div');

  img_current.toggleClass('visibile');
  space_current.toggleClass('indicatore');

  if(prev_img.length != 0) {
    prev_img.toggleClass('visibile');
    prev_space.toggleClass('indicatore');

  } else {
    $('.slider img').last().toggleClass('visibile');
    $('.pianta div').last().toggleClass('indicatore');
  }

});

// $('.next').click(function(){
//
//   var img_current = $('.visibile');
//
//   var next_img = img_current.next();
//
//   img_current.toggleClass('visibile');
//
//   next_img.toggleClass('visibile');
//
// });

// $('.next').click(function(){
//   var img_current = $('.visibile');
//   var next_img = $('.visibile + .successivo');
//   img_current.toggleClass('visibile');
//   next_img.toggleClass('visibile');
//   next_img.toggle('successivo');
// });
