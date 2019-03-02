const buttonParent = document.querySelector('.calc');
let score =  document.querySelector('.score').innerHTML;
const cancel = document.querySelector('.cancel');

let total = '';
cancel.addEventListener('click',function(){
    document.querySelector('.score').innerHTML=0;
    total = '';
})

function equalClick(){
    document.querySelector('.score').innerHTML=eval(total);
}

function checkingLastChar(e){
    
    var lastChar = total.charAt(total.length - 1);
    if(lastChar === e){
        total=total;
    }else{
        total=total + e;
        document.querySelector('.score').innerHTML=total;
    }
}


buttonParent.addEventListener('click',function(e){

        if(e.target.localName ==='button'){
            let sign = e.target.innerHTML;
            if(sign==='0'||sign==='1'||sign==='2'||sign==='3'||sign==='4'||sign==='5'||sign==='6'||sign==='7'||sign==='8'||sign==='9'){
                total = total + sign;
                console.log(total)
                document.querySelector('.score').innerHTML=total;
            }
            
            
            
            switch(sign){
                case 'x':{
                    sign = '*';
                    console.log(total);
                    checkingLastChar(sign)
                }break;
                case '-':{
                    
                    checkingLastChar(sign)
                }break;
                case '+':{
                    
                    checkingLastChar(sign)
                }break;
                case '=':{
                    console.log(eval(total))
                    total = '('+total+')';
                    console.log(total)
                    equalClick();
                }break;
                case '÷':{
                    sign = '/'
                    checkingLastChar(sign)
                }break;
                case '+/-':{
                    total = total + '*-1';
                    console.log(total)
                    document.querySelector('.score').innerHTML=eval(total)
                }break;
                case '%':{
                    total = total + '*0.01';
                    document.querySelector('.score').innerHTML=eval(total)
                }
                case '.':{
                    checkingLastChar(sign)
                }
            }
        }
})


/*document.querySelector('.grey .bright-grey .orange').addEventListener('click',function(){
console.log('xd')
})*/