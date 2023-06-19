<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // JSONファイルからユーザー名とパスワードを取得
  $jsonString = file_get_contents('users.json');
  $users = json_decode($jsonString, true)['users'];

  $foundUser = null;
  foreach ($users as $user) {
    if ($user['username'] === $username && $user['password'] === $password) {
      $foundUser = $user;
      break;
    }
  }

  if ($foundUser) {
    echo "ログインに成功しました";
    // ログイン成功時の処理を追加
  } else {
    echo "ユーザー名またはパスワードが正しくありません";
  }
}
?>
