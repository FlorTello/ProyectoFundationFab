$(document).foundation();
$('.sim-thumb').on('mouseover', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    lazyLoad:false,
    navText: [
      "<button class='orbit-previous'><span class='fa fa-angle-left'></span></button>",
      "<button class='orbit-next'><span class='fa fa-angle-right'></span></button>"
      ],
    responsive:{
        0:{
            items:2


        },
        600:{
            items:3
        },
        1100:{
            items:5
        }
    }
})

var principalImage = document.getElementById("principalImage"),
    image1 = document.getElementById("image1"),
    image2 = document.getElementById("image2"),
    image3 = document.getElementById("image3"),
    image4 = document.getElementById("image4"),
    image1s = document.getElementById("image1s"),
    image2s = document.getElementById("image2s"),
    image3s = document.getElementById("image3s"),
    image4s = document.getElementById("image4s");

function zoom1(){
  principalImage.src = "assets/images/520570-740x740-1461526216-primary.png"
}

function zoom2(){
  principalImage.src = "assets/images/520569-740x740-1461683665-primary22.png"
}

function zoom3(){
  principalImage.src = "assets/images/520571-740x740-1461525528-primary33.png"
}

function zoom4(){
  principalImage.src = "assets/images/520922-740x740-1466510365-primary444.png"
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
