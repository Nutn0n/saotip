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
