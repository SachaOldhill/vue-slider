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
     "currentImg":0,
     "arrayImg": [
       "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
       "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
       "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
       "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
       "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
       "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
   ],
     "nextImg": "next",
     "prevImg": "prev",
     "timer":null,
   },
   methods:{
    go_next: function(){
      this.currentImg++;
      if(this.currentImg>= this.arrayImg.length){
        this.currentImg=0;
      }
     console.log('go next');
    },
    go_prev: function(){
      this.currentImg--;
      if(this.currentImg < 0){
        this.currentImg= this.arrayImg.length - 1;
      }
     console.log('go prev');
    },
    intervalCounter: function () {
      if(this.timer == null){
        this.timer = setInterval(this.go_next,3000);
      }
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
