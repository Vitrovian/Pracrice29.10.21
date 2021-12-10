const demo = () => 'Webpack ';

// eslint-disable-next-line no-console
console.log(demo());

$(document).ready(function(){

    $('.why-cards').slick({
      
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            }
            }
            ]
    });
  });
