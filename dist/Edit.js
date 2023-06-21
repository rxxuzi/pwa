"use strict";
var tryCount = 0;
$(function () {
    $(document).on("click", "#idx", function () {
        var lb = document.getElementById('lb');
        if (lb != null) {
            tryCount++;
            lb.innerHTML = "try : " + tryCount;
        }
        var NodeData = { name: '', lim: '' };
        NodeData["name"] = $(".name").val();
        ;
        NodeData["lim"] = $(".lim").val();
        ;
        save_data(NodeData);
        load_json();
    });
});
function save_data(arg) {
    $.ajax({
        type: 'post',
        url: './src/save.php',
        data: arg,
        success: function () {
            alert('Data saved.');
            console.log('Data saved.');
        },
        error: function () {
            alert('Failed to save data.');
            tryCount++;
            console.log('Failed to save data. try: ' + tryCount);
        }
    });
}
function load_json() {
    $.ajax({
        url: './../rsc/data.json',
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
                console.log("false");
            }
        },
        error: function (_data) {
            location.reload();
            console.log("reload" + _data);
        }
    });
}
//# sourceMappingURL=Edit.js.map