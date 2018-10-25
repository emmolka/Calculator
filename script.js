$(document).ready(function () {
let total='';
$(".button-number").click(function(event){
    
    let buttonClicked = this.innerHTML;
    total=total+buttonClicked;
    console.log(total)
    document.querySelector('#score1').textContent = total;
});
$(".button").click(function(event){
    
    let actionClicked = this.innerHTML;
    total=total+actionClicked;
    console.log(total)
    document.querySelector('#score1').textContent = total;
});
$(".button-equal").click(function(event){
    console.log(eval(total))
   document.querySelector('#score').textContent = eval(total);
});
$('.button-AC').click(function(event){
   total=0; 
    document.querySelector('#score1').textContent = total;
    document.querySelector('#score').textContent = total;
});

});