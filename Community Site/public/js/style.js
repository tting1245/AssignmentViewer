$(function() {
    $(document),tooltip();  //body에 있는 모든 태그 중에 title이란 속성값이 존재하는 태그들에 마우스를 오버하면 툴팁기능 동작
})

jQuery(document).ready(function() {
    $('.scroll1').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

jQuery(document).ready(function() {
    $('.scroll2').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});