<?php
    $to = '228506@st.takushoku-u.ac.jp'; // あなたのメールアドレスに変更
    $subject = 'ドッキリページが開かれました';
    $message = 'ドッキリページが開かれました。すぐに確認してください。';
    $headers = 'From: no-reply@example.com' . "\r\n" .
               'Reply-To: no-reply@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    echo 'Notification sent';
?>
