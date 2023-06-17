"use strict";
function checkPassword() {
    if (msg != null) {
        if (pw != null && un != null) {
            if (un.value == "admin" && pw.value == "admin") {
                msg.innerHTML = "Login successful";
                fetch('https://api.ipify.org/?format=json')
                    .then(response => response.json())
                    .then(data => {
                    var ipAddress = data.ip;
                    var currentDate = new Date();
                    var currentTime = currentDate.toLocaleTimeString();
                    var logData = "ip : " + ipAddress + ", time : " + currentTime + ", name : " + un.value;
                    console.log(logData);
                    login = true;
                })
                    .catch(error => {
                    console.error('IPアドレスの取得中にエラーが発生しました:', error);
                });
            }
            else {
                cnt++;
                login = false;
                msg.innerHTML = "Login failed";
            }
        }
    }
}
function save(logData) {
    $.ajax({
        type: 'post',
        url: './log.php',
        data: logData,
        success: function () {
            console.log("success");
            login = true;
        },
        error: function () {
            alert('データの保存に失敗しました。');
        }
    });
}
var login = false;
var cnt = 0;
var un = document.getElementById('username');
var pw = document.getElementById('password');
var msg = document.getElementById('msg');
let checkButon = document.getElementById('chkBtn');
//# sourceMappingURL=Check.js.map