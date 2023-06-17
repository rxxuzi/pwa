function checkPassword() {
    if (pw.value.length < 8) {
        pw.setCustomValidity("Password must be at least 8 characters long.");
    }

    if (pw != null && un != null) {

        if (un.value == "admin" && pw.value == "admin") {
        
            msg.innerHTML = "Login successful";
            
            fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(data => {
                var ipAddress = data.ip;
                var currentDate = new Date();
                var currentTime = currentDate.toLocaleTimeString();

                var logData = "ip : " + ipAddress + ", time : " + currentTime + ", name : " + un.value ; //log書き込み用変数
                
                console.log(logData);
                // save(logData); あとで直す
                login = true;
                
            })
            .catch(error => {
                console.error('IPアドレスの取得中にエラーが発生しました:', error);
            });

        }else{
            cnt++;
            login = false;
            msg.innerHTML = "Login failed";
        }
    }
}

/**
 * @todo
 * @param {保存したいデータ} logData 
 */
function save(logData) {
    // ログイン情報をログファイルに追加
    $.ajax({
        type: 'post', //サーバー（こっち側）にデータを送信
        url: './log.php', //phpのpath
        data: logData, //dataタイプ
        //try.catch
        success: function(){
            //code
            console.log("success");
            login = true;
        },
        error:function(){
            alert('データの保存に失敗しました。');
        }
    })
}

var login = false;
var cnt = 0;
var un = document.getElementById('username');
var pw = document.getElementById('password');
var msg = document.getElementById('msg');
let checkButon = document.getElementById('chkBtn');
// checkButton.addEventListener('click', che);