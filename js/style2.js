$(document).foundation();
   
    var slidingComponent2 = $('.sliding-border2');
    var listHeight2 = $('.tabs-title2').outerHeight();
    slidingComponent2.css('height',listHeight2);
   
$('.tabs-title2 a').click(function(e){
        activePosition2 = $(this).parent().position().top;
        listHeight2 = $(this).parent().outerHeight();
        slidingComponent2.css('height',listHeight2);
        slidingComponent2.css('transform', 'translateY('+activePosition2+'px)');
    });