<?php
    $logData = $_POST['logData'];
    $path = "./rsc/login.log";

    if(file_exists($path)){
        // ログデータをファイルに追記
        $fp = fopen("./rsc/login.log", "a");
        if ($fp) {
        fwrite($fp, $logData . "\n");
        fclose($fp);
        echo "success";
        } else {
        echo "error";
        }
    }
?>