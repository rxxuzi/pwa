<?php
	$fp = fopen("data.json", "w");//書き込み専用でファイルを開く

	if ($fp == false) {
		echo "Failure";
	} else {
		fwrite($fp, json_encode($_POST)); //postされた内容をjson形式にエンコードして保存
		fclose($fp);//ファイルを閉じる
	}
?>