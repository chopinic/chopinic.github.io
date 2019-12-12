(function (){
    let leftLayer = document.getElementById("fixedLayer");
    let leftBox = document.getElementById("fixedBox");
    let headLayer = document.getElementById("fixedhLayer");
    let headBox = document.getElementById("fixedHeader");

    console.log(leftLayer);



    headLayer.onmouseover = function(){
        headBox.style.display = 'block';
        headBox.setAttribute("class","popUp");
        console.log("display");
    };
    headBox.onmouseout = function(e){
        e = window.event || e;
        var s = e.toElement || e.relatedTarget;
        if(document.all) {
            if (e.contains(s)) {
            return;
        }
        } else {
            var reg = this.compareDocumentPosition(s);
                if (reg == 20 || reg == 0) {
                    return;
                }
            }
        headBox.setAttribute("class","hideDown");
        var timer = setInterval(() => {
            headBox.style.display = 'none';
            console.log("none");
            if(headBox.style.display !== 'block'){
                clearInterval(timer);}
        }, 290);
        
        console.log("hidden");
    };
    




    leftLayer.onmouseover = function(){
        leftBox.style.display = 'block';
        leftBox.setAttribute("class","popUp");
        console.log("display");
    };
    leftBox.onmouseout = function(e){
        e = window.event || e;
        var s = e.toElement || e.relatedTarget;
        if(document.all) {
            if (e.contains(s)) {
            return;
        }
        } else {
            var reg = this.compareDocumentPosition(s);
                if (reg == 20 || reg == 0) {
                    return;
                }
            }
        leftBox.setAttribute("class","hideDown");
        var timer = setInterval(() => {
            leftBox.style.display = 'none';
            console.log("none");
            if(leftBox.style.display !== 'block'){
                clearInterval(timer);}
        }, 290);
        
        console.log("hidden");
    };
    
    
})();

