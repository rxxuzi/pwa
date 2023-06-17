function checkPassword() {
    if (pw.value.length < 8) {
        pw.setCustomValidity("Password must be at least 8 characters long.");
    }
    console.log(un.value + ", password: " + pw.value);
    

    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
        var ipAddress = data.ip;
        var currentDate = new Date();
        var currentTime = currentDate.toLocaleTimeString();
        console.log(ipAddress);  // IPアドレスをコンソールに表示する（開発者向け）
        // ここでIPアドレスを処理するための追加のコードを記述する
    })
    .catch(error => {
        console.error('IPアドレスの取得中にエラーが発生しました:', error);
    });

    if (un.value == "admin" && pw.value == "admin") {
        msg.innerHTML = "Login successful";
    }else{
        cnt++;
        msg.innerHTML = "Login failed";
    }
}
var cnt = 0;
var un = document.getElementById('username');
var pw = document.getElementById('password');
var msg = document.getElementById('msg');
let checkButon = document.getElementById('chkBtn');
// checkButton.addEventListener('click', che);