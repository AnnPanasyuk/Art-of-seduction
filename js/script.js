var viewportWidth = $(window).width();
if( viewportWidth > 960 ){
    var Rows = 1;
    var Slides = 2;
}
else if( viewportWidth > 480 ){
    var Rows = 1;
    var Slides = 1;
}
$('.single-item').slick({
    dots: true,
    slidesToShow: Slides,
    slidesToScroll: Slides,
    rows: Rows
});