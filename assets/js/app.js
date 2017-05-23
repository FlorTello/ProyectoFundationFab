$(document).foundation();

var principalImage = document.getElementById("principalImage"),
    image1 = document.getElementById("image1"),
    image2 = document.getElementById("image2"),
    image3 = document.getElementById("image3"),
    image4 = document.getElementById("image4");

function zoom1(){
  principalImage.src = "assets/images/520570-740x740-1461526216-primary.png"
}

function zoom2(){
  principalImage.src = "assets/images/520570-740x740-1461526216-primary.png"
}

function zoom3(){
  principalImage.src = "assets/images/520570-740x740-1461526216-primary.png"
}

function zoom4(){
  principalImage.src = "assets/images/520570-740x740-1461526216-primary.png"
}

window.addEventListener("load", function(){
  image1.addEventListener("mouseover", function(event){
    event.preventDefault();
    zoom1();
  });
  image2.addEventListener("mouseover", function(event){
    event.preventDefault();
    zoom2();
  });
  image3.addEventListener("mouseover", function(event){
    event.preventDefault();
    zoom3();
  });
  image4.addEventListener("mouseover", function(event){
    event.preventDefault();
    zoom4();
  });

  image1s.addEventListener("click", function(event){
    event.preventDefault();
    zoom1();
  });
  image2s.addEventListener("click", function(event){
    event.preventDefault();
    zoom2();
  });
  image3s.addEventListener("click", function(event){
    event.preventDefault();
    zoom3();
  });
  image4s.addEventListener("click", function(event){
    event.preventDefault();
    zoom4();
  });
});
