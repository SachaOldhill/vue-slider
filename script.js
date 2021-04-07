function clickNext() {
  var active = $('.active');
  console.log(active);
  if (active.hasClass('last')) {
    var nextImg = $('.images img.first');
    active.removeClass('active');
    nextImg.addClass('active');

  } else {
    var nextImg = active.next('img');
    console.log(nextImg);
    active.removeClass('active');
    nextImg.addClass('active');
    console.log(active);
    console.log(nextImg);
  }
  console.log('clickNext');
}

function clickPrev() {
  var active = $('.active');

  if (active.hasClass('first')) {
   var prevImg = $('img.last');
   active.removeClass('active');
   prevImg.addClass('active');
 } else {
   var prevImg = active.prev('img');
   active.removeClass('active');
   prevImg.addClass('active');
 }
 console.log('clickPrev');
}
//1 ? 0 : 1; se è 0 diventa 1 se è 1 diventa 0
function initVue(){
  new Vue({
   el:'#app',
   data:{
     "nextImg": "next",
     "prevImg": "prev"
   },
   methods:{
    go_next: function(){
     console.log('go next');
    },
    go_prev: function(){
     console.log('go prev');
    },
   },
  });
}
function init() {
 // $('.next').click(clickNext);
 // $('.prev').click(clickPrev);
  initVue();
}
$(init);
