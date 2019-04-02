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
function Dropdown(){

        document.getElementById('nav').style.visibility='visible';
        document.getElementById('nav-shop').style.visibility='visible';


}
function changeShoe(color){
    if(color=='black'){
        $('.shoe3d').hide()
        $('.shoemodel').show()
        document.getElementById('shoe').src="img/shoe1.png"
    }else if(color=='white'){
        $('.shoe3d').hide()
        $('.shoemodel').show()
        document.getElementById('shoe').src="img/shoe2.png"
    }else if(color=='purple'){
        $('.shoe3d').hide()
        $('.shoemodel').show()
        document.getElementById('shoe').src="img/shoe3.png"
    }else{
        $('.shoemodel').hide()
        $('.shoe3d').show()

    }
}
