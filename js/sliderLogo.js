    $(function () {
    // creation function constructor
    function Slide(elt) { 
        this.elt= elt;
        this.calculLongeur= () => {
            var longeur = [];
            for(let k=0; k < this.elt.length; k++) {
                longeur[k] = this.elt.eq(k).width();
            }
            return longeur;
        };
        // ** creation of the calculLonguer function for the calcul longeur
        this.longeur = this.calculLongeur();
        this.addPosition = () => {
            var numberElt = this.elt.length;
            for(let i=0; i < numberElt; i ++) {
                if(i===0) {
                    this.elt.eq(i).css('left', 0);
                } else {
                    this.elt.eq(i).css('left', this.longeur[i-1]*i);
                }
            }
        }
        // ** creation of the slide function 
        this.slideLogo = () =>{
            var firstElt;
            const parent = this.elt.parent();
            for(let i=0; i<this.elt.length; i++) {
                if(i===0) {
                    this.elt.eq(i).animate({
                        left: -this.longeur[i]
                    }, 400, ()=>{
                        firstElt = this.elt.eq(i);
                        this.elt.eq(i).remove();
                        firstElt=firstElt.addClass('hide');
                        parent.append(firstElt);
                    });
                
                } else {
                    this.elt.eq(i).animate({
                        left: i*this.longeur[i] - this.longeur[i] 
                    }, 500);
                    this.elt.eq(i).removeClass('hide');
                    if(i==this.elt.length -1) {
                        this.elt.eq(i).addClass('hide');
                    }
                }
            }
        }
    }
    // ++ creation and execution of the function
    var elt1 = new Slide($('.ay-container .box-slide .elt'));
        elt1.addPosition();
        setInterval(function () {
            elt1=new Slide($('.ay-container .box-slide .elt'));
            elt1.slideLogo();
        }, 3000);
});

