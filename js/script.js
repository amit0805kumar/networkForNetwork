$(function () {

    $('select').change(function () {
        if ($(this).val() != '0') {
            $(this).css('border', '1px solid #6ff9ff');
            $('.search__button').css("background", '#6ff9ff').css('color', 'black');
            $('.search__button').toggleClass('psuedoMod');
        } else {
            $(this).css('border', '1px solid #0031ca');
            $('.search__button').css("background", '#3d5afe').css('color', 'white');
            $('.search__button').toggleClass('psuedoMod');

        }   
    });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
    
    $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});
