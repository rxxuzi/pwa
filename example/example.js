function btn1() {
    ex1.innerHTML = "Hello World";
    console.log("ex1 chenge");
}

var ex1 = document.getElementById('ex1');
console.log("Hello World");
checkButton.addEventListener('btn1', btn1);
