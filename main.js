$('.next').click(function(){

  var img_current = $('.visibile');

  var next_img = img_current.next();

  img_current.toggleClass('visibile');

  next_img.toggleClass('visibile');

});

$('.prev').click(function(){

  var img_current = $('.visibile');

  var prev_img = img_current.prev();

  img_current.toggleClass('visibile');

  prev_img.toggleClass('visibile');

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
