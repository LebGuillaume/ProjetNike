$(document).ready(function(){
    anime({
        targets: '.staggering-grid-demo .el',
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });

});

function changeShoe(color){
    if(color=='black'){
        document.getElementById('shoe').src="img/shoe1.png"
    }else if(color=='white'){
        document.getElementById('shoe').src="img/shoe2.png"
    }else{
        document.getElementById('shoe').src="img/shoe3.png"
    }
}
