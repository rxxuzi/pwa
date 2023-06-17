function buttonClick(){
    console.log('button clicked');

    if(password != null){
        if(password == pw){
            // alert('Correct');
            msg.innerText = 'Your number is ' + nText.value ;
        }else{
            msg.innerText = 'Wrong password';
        }
    }else{
        console.log('password is null');
    }
    
}
var nText = document.getElementById('nText');
var password = document.getElementById('password');
let checkButon = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);