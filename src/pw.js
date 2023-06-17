function buttonClick(){
    msg.innerText = 'Your number is ' + nText.value ;
}
var nText = document.getElementById('nText');
let checkButon = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);