<?php
// Файлы phpmailer

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

require __DIR__ . '/compoundMsg.php';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    // Перебираем имена полей и возвращает массив с теми, что есть в запросе
    // это позволяет использовать код более универсально для разных форм
      function CheckValue($values) {
        foreach ($values as $val) {
          if (isset($_POST[$val])) {
            $req[$val] = htmlspecialchars($_POST[$val]);
          }
        }
        return $req;
      }

      // массив со списком имен полей, в данном случае для моего последнего проекта
      $inputs = CheckValue(array(
        'namePage',
        'nameForm',
        'name_f',
        'mail_f',
        'phone_f',
        'message_f',
        'myfile',
        'messenger',
        'workers',

        'q-workplaces',
        'q-ports',
        'q-project',
        'q-estimate',

        'calc-info-1',
        'calc-info-2',
        'camera-1',
        'camera-2',
        'camera-3',
        'camera-4',
        'camera-5',
        'camera-6',
        'camera-7',
        'camera-8',
        'cameras-price',
        'cameras-count',

        'archiveSize',
        'processorPrice',
        'motherboardPrice',
        'boxPrice',
        'radiatorPrice',
        'memoryPrice',
        'ssdPrice',
        'diskCount',
        'disksPrice',
        'controllerPrice',
        'consumablePrice',
        'licensePrice',
      ));

      $title = "EXASystems";
      $body = getMsg($inputs);
      $file = $_FILES['myfile'];

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
