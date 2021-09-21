<?php
// Файлы phpmailer

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$namePage = $_POST['namePage'];
$nameForm = $_POST['nameForm'];
$name = $_POST['name_f'];
$email = $_POST['mail_f'];
$phone = $_POST['phone_f'];
$message = $_POST['message_f'];
$file = $_FILES['myfile'];

// Формирование самого письма
$title = "EXASystems";
$body = "
<h2>$nameForm</h2>
<b>Страница:</b> $namePage<br>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Номер:</b><br>$phone<br>
<b>Сообщение:</b><br>$message<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->IsMail();
    $mail->CharSet = "UTF-8";
    $mail->From = 'b2b@exasystems.ru';
    $mail->FromName = 'EXASystems';
    // Получатель письма
    $mail->addAddress('b2b@exasystems.ru');
    $mail->addAddress('anatoly.efanenkov@yandex.ru');
    $mail->addAddress('9993974@mail.ru');
    $mail->addAddress('vinovet.g08@gmail.com');
    $mail->addAddress('haasson22@yandex.ru');

    // Прикрипление файлов к письму
    if (!empty($file['name'][0])) {
        for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
            $filename = $file['name'][$ct];
            if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
                $rfile[] = "Файл $filename прикреплён";
            } else {
                $rfile[] = "Не удалось прикрепить файл $filename";
            }
        }
    }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
      $result = "success";
    }
    else {
      $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
