/* global $*/
$(function () {
  "use strict";
  var style1 = {
            position: "fixed",
            width: "90%",
            height: "76vh",
            background:"#fff",
            top: "111px",
            left:"50%",
            zIndex: "999",
            borderRadius:"3px",
            margin: "0 0 0 -684px"
  },
  style2 = {
    width: "100%",
    height: "auto",
    position: "relative",
    background:"none",
    top: 0,
    left:0,
    zIndex:1,
    borderRadius:0,
    margin:0
  },
  styleConImg1 = {
    width: "100%",
    height: "25vh",
    position:"relative"
  },
  styleConImg2 = {
    width: "auto",
    height: "auto"
  },
  styleImg1= {
      top:"50%",
      left:"50%"
  },
  styleImg2= {
    top:"40vh",
    left:"40vh"
};
// function detected screen 
function detectedScreen () {
  if($(window).width() <= 640) {
    style1.width = "100%";
    style1.height="100vh";
    style1.top=0;
    style1.left=0;
    style1.margin=0;
  }
}
// start show prouduct function 
  function showPoduct (pro) {
    'use strict';
    if(!pro.hasClass('show')) {
        $(".overley").toggleClass('hide');
        pro.addClass("show").addClass('ho-class');
        pro.css(style1).find('.info-pro').addClass("large");
        pro.find('div.close, div.discription, .compteur, .btn-buy').toggleClass("hide");
        pro.find(".img-pro .myimg").css(styleConImg1).find("img").css(styleImg1);
    }
}
// start hide product function 
 function hideProcuct(pro) {
    "use strict";
    if(pro.hasClass("show")) {
        $(".overley").toggleClass('hide');
        pro.removeClass('show').removeClass('ho-class');
        pro.find('div.close, div.discription, .compteur, .btn-buy').toggleClass("hide");
        pro.css(style2).find('.info-pro').removeClass('large');
        pro.find(".img-pro .myimg").css(styleConImg2).find("img").css(styleImg2);
    }
}
// start count number of product function 
function countNumeber(elt, a) {
var num = elt.siblings('#number_pro').text(),
oper;
num = Number(num);
    if(elt.attr('data-op') === 'plus') {
      num++;
       elt.siblings('#number_pro').text(num);
       oper='plus';
    } else if(elt.attr('data-op') === 'moin') {
      if(num > 1) {
        num--;
      elt.siblings('#number_pro').text(num);
      }
      oper='moin';
    }
    return (
      {
        counter : num,
        oper:oper
      });
  }
// calcul price with quantity
function calculPrice(elt, etat) {
    var val = elt.parents('.card').find('.price-pro .p-num').text(),
    iniPrice;
    if((etat.counter== 2) && (etat.oper =='plus')) {
      elt.parents('.card').find('.price-pro .p-num').attr('data-ini-price', val);
    }
    iniPrice = Number(elt.parents('.card').find('.price-pro .p-num').attr('data-ini-price'));
    val = iniPrice*etat.counter;
    elt.parents('.card').find('.price-pro .p-num').text(val);
}
// create function for reste the value of product 
function resteValue (elt, elt1) {
 elt.text(elt.attr('data-ini-price'))
 elt1.text(1);
}
// gere the event click of the card and close btn 
$("section.store .container_card .card").on("click", function () {
       detectedScreen ();
       showPoduct($(this));

});
$("section.store .container_card .card .close").on("click", function (event) {
    event.stopPropagation();
    hideProcuct($(this).parent(".card"));
    resteValue($(this).parents('.card').find('.info-pro .price-pro .p-num'), $(this).parents('.card').find('.compteur .number'));
});
// gere event to the compteur product 
$('section.store .container_card .card .compteur span').on('click', function (event) {
  event.stopPropagation();
  calculPrice($(this), countNumeber($(this), 1));

})
});