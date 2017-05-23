$(document).foundation()
$('.sim-thumb').on('mouseover', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
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
