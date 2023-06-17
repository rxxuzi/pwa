import { data } from "jquery";

/*ボタンを押したときに、nodedataにnameとvalueを代入する
*/
$(function(){
    $(document).on("click", "#idx", function(_event){    
        var NodeData: { name: string, lim: string } = { name: '', lim: '' };
        NodeData["name"]  = $(".name").val() as string;; //.nameクラスから参照
        NodeData["lim"] = $(".lim").val() as string;;//.limクラスから参照
        save_data(NodeData);//save_dataにNodeDataを渡す
        load_json();//load_jsonを実行
    });
});

/*
書き込み用関数
*/
function save_data(arg: { name: string; lim: string; }){
    //ajaxはjsonはつかさどるライブラリ
    $.ajax( {
        type: 'post', //サーバー（こっち側）にデータを送信
        url: './save.php',
        data: arg,
        //try.catch
        success: function(){
        alert('データを保存しました。');
        },
        error:function(){
        alert('データの保存に失敗しました。');
        }
    });
}

//読み取り用関数
function load_json(){
    $.ajax({
        url: './rsc/data.json',
        cache : false,
        dataType : 'json',
        /*
        成功した場合の流れ
        まずjsonファイルからnameタグとlimタグのvalueを抜き出す
        */
        success: function(data) {
            const node = data[0];
            if($.inArray("address",node)){
                $(".name").val(node["name"]);
                $(".lim").val(node["lim"]);
            }else{
                alert("false");
            }
        },
        error: function( _data ) {
            location.reload()
            console.log("reload" + data);
        }
    });
}
