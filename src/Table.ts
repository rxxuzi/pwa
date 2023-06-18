/**
 * index.htmlに現在の状況を載せる
 * @author rxxuzi
 * @version 1.0.0
 */

const refreshInterval = 100;

$(function(){
    load_data();
});


function load_data(){
    //時間を取得
    //現在時刻を取得
    const date = new Date();
        const 
            H = date.getHours(), //時
            M = date.getMinutes(), //分
            S = date.getSeconds(), //秒
            MS = date.getMilliseconds();//ミリ秒

    $(".time").text(H + 'h' + M + 'min' + S +'.' + (MS%10) +'sec'); //合体

    //valueとlimitの値を取得
    var val = 0;
    var lim = 0;

    //jsonから値を取得する関数
    m_limit();
    m_value();
    //小数点もok
    val = Number($(".val").text()); //numberにキャスト
    lim = Number($(".lim").text());

    var url = $('#index_png').attr("src");//画像のurlを取得する
    $('#index_png').attr("src" , url + '?v=${Math.random()}')//キャッシュ回避のためにurlを毎回変える

    //valueがlimitを超えたときにtr部分を赤くする
    if (val >= lim) {
        $('#table_tr').css('background-color','red');
    }else{
        $('#table_tr').css('background-color','');
    }

}

//limitとnameを取得

function m_limit(){
    $.ajax({
    url: './rsc/data.json',
    cache : false,
    dataType : 'json',
    /*成功した場合の流れ
    まずjsonファイルからnameタグとlimタグのvalueを抜き出す
    */
    success: function(data) {
        $(".name").text(data["name"]);
        $(".lim").text(data["lim"]);
        return Number(data["lim"]);
    },
    //エラー時にリロードする
    error: function( data ) {
        location.reload()
        console.log(data);
    }

});

}

//valueを取得
function m_value(){
    /* valueのjsonファイルを参照*/
$.ajax({
    url: './rsc/value.json',
    cache : false,
    dataType : 'json',
    
    success: function(data) {
        $(".val").text(data);
        return Number(data);
    },
    //エラー時にリロードする (unused)
    error: function( data ) {
        location.reload()
        console.log(data);
    }
});
}

//300ms毎永遠ループ
var timer_id = setInterval( function () {
    load_data();
} , refreshInterval);

var rows = []; // 追加された行を保存する配列

function addRow() {
    var table = document.getElementById("table") as HTMLTableElement;
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "Cell 1";
    cell2.innerHTML = "Cell 2";
    cell3.innerHTML = "Cell 3";
    cell4.innerHTML = "Cell 4";
    cell4.innerHTML = "Cell 4";
    cell5.innerHTML = "Cell 5";

    // 追加された行を配列に保存
    rows.push(row);
}