function detailTab(evt, activedetail, dotclass) {
  var i, detailcontent, detaillink, dot;

  dot = document.getElementsByClassName("dot");
  for(var z=0 ; z<dot.length; z++){
    dot[z].style.background = "#eaeaea";
  }

  detailcontent = document.getElementsByClassName("detailcontent");
  for (i = 0; i < detailcontent.length; i++) {
      detailcontent[i].style.display = "none";
  }

  detaillink = document.getElementsByClassName("detaillink");

  for (i = 0; i < detaillink.length; i++) {
      detaillink[i].className = detaillink[i].className.replace(" active", "");
  }

  document.getElementById(activedetail).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById(dotclass).style.background = "#333";
}

!function() {
    for (var t, e = 500, n = 15, o = document.getElementsByTagName("a"), r = 0; r < o.length; r++)
        t = void 0 === o[r].attributes.href ? null : o[r].attributes.href.nodeValue.toString(), null !== t && t.length > 1 && "#" == t.substr(0, 1) && (o[r].onclick = function() {
            var t,
                o = this.attributes.href.nodeValue.toString();
            if (t = document.getElementById(o.substr(1)))
                for (var r = e / n, f = l(), i = (u(t) - f) / r, c = 1; r >= c; c++)
                    !function() {
                        var t = i * c;
                        setTimeout(function() {
                            window.scrollTo(0, t + f)
                        }, n * c)
                    }();
            return !1
        });
    var u = function(t) {
            for (var e = 0; void 0 != t.offsetParent && null != t.offsetParent;)
                e += t.offsetTop + (null != t.clientTop ? t.clientTop : 0), t = t.offsetParent;
            return e
        },
        l = function() {
            return document.documentElement.scrollTop + document.body.scrollTop
        }
}();

$(document).ready(function () {
  $('#mobile-nav').on('click', function() {
    $('.mobile-overlay').toggleClass("overlay-active");
  });
  /* When mouse is out : Remove active class
  $('.time-wrapper').mouseout(function() {
    $('.timeline-fill').removeClass("timeline-active");
    $('.timeline-fill').addClass("timeline-unactive");
    $('.date-1').removeClass("date-active");
    $('.date-2').delay(1000).queue(function(){
      $('.date-2').removeClass("date-active");
      var that = $( this );
      that.dequeue();
    });
  })*/

  /* When scroll to timeline  : add active class */
  $(window).scroll(function() {
   var hT = $('.time-wrapper').offset().top,
       hH = $('.time-wrapper').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
     $('.timeline-fill').removeClass("timeline-unactive");
     $('.timeline-fill').addClass("timeline-active");
     $('.date-1').addClass("date-active");
     $('.date-2').delay(1000).queue(function(){
       $('.date-2').addClass("date-active");
       var that = $( this );
       that.dequeue();
     });
   }

   /* Count animation
   function animateValue(id, start, end, duration) {
     var range = end - start;
     var current = start;
     var increment = end > start? 1 : -1;
     var stepTime = Math.abs(Math.floor(duration / range));
     var obj = document.getElementById(id);
     var timer = setInterval(function() {
         current += increment;
         obj.innerHTML = current;
         if (current == end) {
             clearInterval(timer);
         }
     }, stepTime);
 }
         animateValue("big-date", 1, 5, 4000);
*/
});

  /* When mouse is hover : add active class */
  $('.time-wrapper').mouseover(function() {
    $('.timeline-fill').removeClass("timeline-unactive");
    $('.timeline-fill').addClass("timeline-active");
    $('.date-1').addClass("date-active");
    $('.date-2').delay(1000).queue(function(){
      $('.date-2').addClass("date-active");
      var that = $( this );
      that.dequeue();
    });
  })

  /* Replay button */
  $('.start-timeline').click(function () {
  $('.timeline-fill').removeClass("timeline-unactive");
  $('.timeline-fill').addClass("timeline-active");
  });





});
