$(function () {
// start create class for element 
function EltTarget(elt, tyEffe) {
    this.elt = elt;
    this.width = this.elt.width;
    this.height = this.elt.height;
    this.isTime = false;
    this.typeEffect = tyEffe;
    this.styleAnime = {};
    this.nStyleAnime = {};
        switch(this.typeEffect) {
            case "rtlOpacity": 
            this.styleAnime = {
                opacity:1,
                marginLeft: 0,
            };
            this.nStyleAnime = {
                opacity:0,
                marginLeft:'60px'
            }
            break;
            case "ltrOpacity": 
            this.styleAnime = {
                opacity:1,
                marginRight: 0,
            };
            this.nStyleAnime = {
                opacity:0,
                marginRight:'80px'
            }
            break;
            case "ttbOpacity": 
            this.styleAnime = {
                opacity:1,
                marginBottom: 0,
            };
            this.nStyleAnime = {
                opacity:0,
                marginBottom:'60px'
            }
            break;
            case "bttOpacity": 
            this.styleAnime = {
                opacity:1,
                marginTop: 0,
            };
            this.nStyleAnime = {
                opacity:0,
                marginTop:'60px'
            }
            break;
            default:
                console.log('error chose type animation');
        };
    this.elt.css(this.nStyleAnime);
    this.effect = (scrElt, scrWin, longuer, dure) => {
        this.isTime = (scrElt - longuer <= scrWin ) ? this.isTime= true : false;
           if (this.isTime) {
               this.elt.animate(this.styleAnime, dure);
           }          
    };


}
var elt1 = new EltTarget($('section#about .left-box h1'), "rtlOpacity"),
    elt2 = new EltTarget($('section#about .right-box .img-ab .back-title .block-img img'), "rtlOpacity"),
    elt3 = new EltTarget($('section#about .left-box .text-ab'), "ltrOpacity"),
    elt4 = new EltTarget($('section#about .right-box .img-ab .back-title h2'), 'rtlOpacity'),
    elt5 = new EltTarget($('footer .top-box .foot-title h1'), 'rtlOpacity'),
    elt6 = new EltTarget($('footer .footpoin'), 'ltrOpacity'),
    elt7 = new EltTarget($('.poin-container'), 'rtlOpacity');
$(window).on('scroll', function () {
    elt1.effect(elt1.elt.offset().top, $(this).scrollTop(), 250, 500);
    elt2.effect(elt1.elt.offset().top, $(this).scrollTop(), 250, 500);
    elt3.effect(elt1.elt.offset().top, $(this).scrollTop(), 250, 1500);
    elt4.effect(elt4.elt.offset().top, $(this).scrollTop(), 750, 500);
    elt5.effect(elt5.elt.offset().top, $(this).scrollTop(), 200, 500);
    elt6.effect(elt6.elt.offset().top, $(this).scrollTop(), 700, 500);
    elt7.effect(elt7.elt.offset().top, $(this).scrollTop(), 700, 500);
})
});
