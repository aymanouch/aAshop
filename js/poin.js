$(function() {
    function linePoin(cont, color, width, height) {
        var styleParent={width: width + "px", height: height + "px", overflow: "hidden"},
        spanStyle="display: inline-block; width:5px; height:5px; background:" + color + "; margin:0 5px; border-radius: 50%";
        cont.css(styleParent);
        var long=parseInt(cont.width()),
        haut = parseInt(cont.height());
        haut=parseInt(haut/19);
        long=parseInt(long/16);
        color=(color==null && color==undefined) ? '#000' : color;
        for(let i=0; i<haut; i++) {
            var div=document.createElement('div');
            for(let j=0; j<long; j++) {
                var span=document.createElement('span');
                span.append('');
                if(i%2==0 && j==0) {
                    span.setAttribute('class', 'hidepoints');
                } else if((i%2!=0) && j==long -1) {
                    span.setAttribute('class', 'hidepoints');
                }
                span.setAttribute('style', spanStyle);
                div.append(span);
            }
            cont.append(div);
        }
      }
   linePoin($('.poin-container'), '#6130f282', 500, 200);
   linePoin($('.footpoin'), '#310e97', 400, 150);

});