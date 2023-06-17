"use strict";
$(function () {
    load_data();
});
function load_data() {
    const date = new Date();
    const H = date.getHours(), M = date.getMinutes(), S = date.getSeconds(), MS = date.getMilliseconds();
    $(".time").text(H + 'h' + M + 'min' + S + '.' + MS + 'sec');
    var val = 0;
    var lim = 0;
    m_limit();
    m_value();
    val = Number($(".val").text());
    lim = Number($(".lim").text());
    var url = $('#index_png').attr("src");
    $('#index_png').attr("src", url + '?v=${Math.random()}');
    if (val >= lim) {
        $('#table_tr').css('background-color', 'red');
    }
    else {
        $('#table_tr').css('background-color', '');
    }
}
function m_limit() {
    $.ajax({
        url: './rsc/data.json',
        cache: false,
        dataType: 'json',
        success: function (data) {
            $(".name").text(data["name"]);
            $(".lim").text(data["lim"]);
            return Number(data["lim"]);
        },
        error: function (data) {
            location.reload();
            console.log(data);
        }
    });
}
function m_value() {
    $.ajax({
        url: './rsc/value.json',
        cache: false,
        dataType: 'json',
        success: function (data) {
            $(".val").text(data);
            return Number(data);
        },
        error: function (data) {
            location.reload();
            console.log(data);
        }
    });
}
var timer_id = setInterval(function () {
    load_data();
}, 3000);
//# sourceMappingURL=Table.js.map