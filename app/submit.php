<?php
// include 'a.charset.php';
if (isset($_POST['user'])) { $user=$_POST['user']; }
if (isset($_POST['phone'])) { $phone=$_POST['phone']; }
if (isset($_POST['mail'])) { $mail=$_POST['mail']; }

$user = stripslashes($user);
$user = htmlspecialchars($user);
$phone = stripslashes($phone);
$phone = htmlspecialchars($phone);
$mail = stripslashes($mail);
$mail = htmlspecialchars($mail);
$user = trim($user);
$phone = trim($phone);
$mail = trim($mail);

$message = "Имя: ".$user."\nТелефон: ".$phone."\nПочта: ".$mail;

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

/* дополнительные шапки */
$headers .= "From: Order <itsevil@yandex.ru>\r\n";
$headers .= "Cc: itsevil@yandex.ru\r\n";
$headers .= "Bcc: itsevil@yandex.ru\r\n";

$subject = "Заявка (".date("H:i d/m/Y) ");

mail("itsevil@yandex.ru", $subject, $message, $headers);
?>
