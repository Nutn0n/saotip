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
  $('#start-timeline').mouseout(function() {
    $('.timeline-fill').removeClass("timeline-active");
    $('.timeline-fill').addClass("timeline-unactive");
    $('.date-1').removeClass("date-active");
    $('.date-2').delay(1000).queue(function(){
      $('.date-2').removeClass("date-active");
      var that = $( this );
      that.dequeue();
    });
  })
  $('#start-timeline').mouseover(function() {
    $('.timeline-fill').removeClass("timeline-unactive");
    $('.timeline-fill').addClass("timeline-active");
    $('.date-1').addClass("date-active");
    $('.date-2').delay(1000).queue(function(){
      $('.date-2').addClass("date-active");
      var that = $( this );
      that.dequeue();
    });
  })
});
