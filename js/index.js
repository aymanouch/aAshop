/*global $*/
$(function() {
'use strict';
// start create closer function 
function closeMenu () {
    'use strict';
    var sp1 = $('header#header nav .nav-bar .con-list .menu a span:nth-child(1)'),
    sp2 = $('header#header nav .nav-bar .con-list .menu a span:nth-child(2)'),
    menu = $('header#header nav .nav-bar .con-list ul'),
    widWin = $(window).width(),
    hei = (widWin < 600) ? '65vh' : '100%';
    console.log(widWin);
    if(sp1.hasClass("meclose1") && sp2.hasClass("meclose2")) {
        sp1.removeClass('meclose1');
        sp2.removeClass('meclose2');
        menu.animate({
            height:'0%'
        }, 500); 
    } else {
        sp1.addClass('meclose1');
        sp2.addClass('meclose2');
        menu.animate({
            height:hei
        }, 800);

    }
}
// function for add the position of the product 
function addPosition(porElt, r) {
    var numElt = porElt.length;
    for (var i=0; i < numElt; i++) {
        porElt.eq(i).css("left", i*r + '%');
    }
}
// function slide product 
function slideBox(elts) {
    var le = elts.length;
    for (var i=0; i < le; i++) {
        var ps = parseFloat(elts.eq(i).css('left')) - parseFloat(elts.eq(i).innerWidth());
        elts.eq(i).css('left', ps + 'px');
        if (i===0) {
            var newFirst = elts.eq(i);
            elts.eq(i).remove();
            elts.parent('.our-product').append(newFirst);
        }
        addPosition($('.our-product .product-slide'),85);
    }
}
// create function for show alert for the option not responsive now!
function showAlert() {
    alert('this option not responsive now !');
}
// execute function addPosition 
addPosition($('.our-product .product-slide'),85);
// gere click event to a circle menu
$('header#header nav .nav-bar .con-list .menu a').on('click', function () {
    closeMenu();
});
// gere event click to click-elt 
$('.our-product .click-elt').on('click', function () {
    slideBox($('.our-product .product-slide'));
});
// gere the elt for alert 
$('.faild').on("click", function () {
    showAlert();
})
});