<?php
	$fp = fopen("./rsc/login.log", "a");

	if ($fp == false) {
		echo "Failure";
	} else {
		// fwrite($fp, json_encode($_POST));
        // fwrite($fp, $_POST['username']);
        fwrite($fp, "test\n");
		fclose($fp);
	}
?>