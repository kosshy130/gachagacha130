<?php
mb_language('Japanese');
mb_internal_encoding('UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: index.html');
  exit;
}

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }

if (!empty($_POST['website'])) { http_response_code(400); exit('不正な送信です。'); }

$name = trim($_POST['name'] ?? '');
$company = trim($_POST['company'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$type = trim($_POST['type'] ?? '');
$message = trim($_POST['message'] ?? '');
$consent = $_POST['consent'] ?? '';

$errors = [];
if ($name === '' || $email === '' || $type === '' || $message === '' || $consent === '') $errors[] = '必須項目が未入力です。';
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'メールアドレスの形式が正しくありません。';

if ($errors) {
  http_response_code(400);
  echo '<!doctype html><meta charset="UTF-8"><p>送信に失敗しました。</p><ul>';
  foreach ($errors as $error) echo '<li>' . h($error) . '</li>';
  echo '</ul><p><a href="index.html#contact">戻る</a></p>';
  exit;
}

$to = 'info@example.com'; // ここを実際のメールアドレスに変更
$subject = '【株式会社KAKO】お問い合わせがありました';
$body = "お問い合わせ内容\n\n";
$body .= "お名前: {$name}\n会社名: {$company}\nメール: {$email}\n電話番号: {$phone}\n種別: {$type}\n\n内容:\n{$message}\n";

$headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n";
$headers .= "Reply-To: {$email}\r\n";

$sent = mb_send_mail($to, $subject, $body, $headers);
if (!$sent) { http_response_code(500); exit('メール送信に失敗しました。'); }

header('Location: thanks.html');
exit;
