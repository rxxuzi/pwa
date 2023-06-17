"use strict";
$(function () {
    $(document).on("click", "#idx", function (_event) {
        var NodeData = { name: '', lim: '' };
        NodeData["name"] = $(".name").val();
        ;
        NodeData["lim"] = $(".lim").val();
        ;
        save_data(NodeData);
    });
});
function save_data(arg) {
    $.ajax({
        type: 'post',
        url: './save.php',
        data: arg,
        success: function () {
            alert('データを保存しました。');
        },
        error: function () {
            alert('データの保存に失敗しました。');
        }
    });
}
function load_json() {
    $.ajax({
        url: './rsc/data.json',
        cache: false,
        dataType: 'json',
        success: function (data) {
            const node = data[0];
            if ($.inArray("address", node)) {
                $(".name").val(node["name"]);
                $(".lim").val(node["lim"]);
            }
            else {
                alert("false");
            }
        },
        error: function (_data) {
            location.reload();
            console.log("reload" + _data);
        }
    });
}
//# sourceMappingURL=Edit.js.map