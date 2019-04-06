function scrollToTop() {
    scroll = setInterval(function(){
        if (window.scrollY != 0) window.scrollBy(0, -10);
        else clearInterval(scroll);
    },5);
    return false;
}

window.addEventListener("scroll", function(){
  //console.log(window.scrollY);

  if(window.scrollY < 200) document.getElementById('goUp').style.opacity = "0";
  else document.getElementById('goUp').style.opacity = "1";
  return false;
});
