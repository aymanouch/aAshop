$(window).ready(function () {
    var myElt = $('section.store .con-card');
    // start declaration of the function hide elt 
    function hideElt(myElt) {
        for(let i=7; i < myElt.length; i++) {
            if(i>7) {
                myElt.eq(i).addClass('hide');
            }
        }
    }
// start gere the hideElt 
hideElt(myElt);
});
$(function() {
    var myElt = $('section.store .con-card');
    // start function  show the card
    function viewMore (myElt, btn) {
        var startIndex, j;
       for(let i=7; i < myElt.length; i++) {
           if (myElt.eq(i).hasClass('hide')) {
              startIndex=i;
              break;
           }
       }
       for(j=startIndex; j< startIndex + 4; j++) {
           myElt.eq(j).removeClass('hide');
       }
       if(j>=myElt.length) {
        btn.addClass('hide'); 
     } 
    }
    
    $('section.store .view-more').on('click', function () {
    viewMore(myElt, $(this));
    });
});