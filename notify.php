<?php
    // 受信者のメールアドレスを指定
    $to = '228506@st.takushoku-u.ac.jp'; // あなたのメールアドレスに変更

    // メールの件名とメッセージ
    $subject = 'ドッキリページが開かれました';
    $message = 'ドッキリページが開かれました。すぐに確認してください。';
    $headers = 'From: no-reply@example.com' . "\r\n" .
               'Reply-To: no-reply@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // メールを送信
    mail($to, $subject, $message, $headers);

    // ログファイルにアクセス情報を記録
    $logFile = 'access.log';
    $currentTime = date('Y-m-d H:i:s');
    $userIp = $_SERVER['REMOTE_ADDR'];
    $logEntry = "Time: $currentTime, IP: $userIp\n";

    file_put_contents($logFile, $logEntry, FILE_APPEND);

    // クライアントに通知を送信
    echo 'Notification sent';
?>
