<?php
	$fp = fopen("./rsc/login.log", "a");
    $logData = $_POST;
	// ログデータをファイルに追記
    $fileHandle = fopen($logFile, 'a');
    if ($fileHandle) {
    fwrite($fileHandle, $logData . "\n");
    fclose($fileHandle);
    echo "success";
    } else {
    echo "error";
    }
?>