<?php
// Файлы phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'php/Exception.php';
require 'php/PHPMailer.php';
require 'php/SMTP.php';

// Переменные
$info = $_POST['info'];
$company = $_POST['companyVal'];
$name = $_POST['nameVal'];
$phone = $_POST['telephoneVal'];
$email = $_POST['emailVal'];
$message = $_POST['detailsVal'];
// Настройки
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = 'yurij.leginchuk@gmail.com';
$mail->Password = 'LiHiN1996';
$mail->SMTPSecure = 'ssl';
// От кого
$mail->setFrom($email, 'yurij.leginchuk@gmail.com');

// Кому
$mail->addAddress('yurij.leginchuk@gmail.com');

// Тема письма
$mail->isHTML(true);
$mail->Subject = 'Заявка с сайта';

// Тело письма
$body = 'Тип: ' . $info . '</br>';
$body = 'Компания: ' . $company . '</br>';
$body = 'Имя: ' . $name . '</br>';
$body .= 'Номер телефона: ' . $phone . '</br>';
$body = 'Email: ' . $email . '</br>';
$body .= 'Сообщение: ' . $message;
$mail->msgHTML($body);


$mail->send();

if($mail->send()) {
    echo 'ok'
} else {
    echo 'false'
}
?>
