"use strict";
const refreshInterval = 1000;
$(function () {
    load_data();
});
function load_data() {
    const date = new Date();
    const H = date.getHours(), M = date.getMinutes(), S = date.getSeconds(), MS = date.getMilliseconds();
    $(".time").text(H + 'h' + M + 'min' + S + Math.floor(MS / 100) + 'sec');
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
        url: './../rsc/data.json',
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
}, refreshInterval);
var rows = [];
function addRow() {
    var table = document.getElementById("table");
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
    rows.push(row);
}
//# sourceMappingURL=Table.js.map