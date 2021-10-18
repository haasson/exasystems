<?php

function getMsg($inputs) {
  $msg = '<table style="max-width: 1000px;font-family: sans-serif;border-collapse: collapse; border-top: 1px solid #a9a9a9;border-bottom: 1px solid #a9a9a9">';
  $msg .= '<caption style="font-size: 1.2em; font-weight: bold; padding: 10px 0">' . $inputs['reason'] . '</caption>';
  $counter = 1;
  $currentInputName = '';
  unset($inputs['reason']);

  foreach ($inputs as $inputName => $inputValue) {
    $name = $inputName;
    if (strcmp ($currentInputName, getRus($inputName)) === 0) {
      $counter++;
      $name = '';
    }
    $style = $counter%2 === 0 ? 'style="background-color: #efefef"' : '';
    $currentInputName = getRus($inputName);

    $msg .= '<tr ' . $style . '><td style="font-weight: bold; height: 2em;padding-right: 20px;padding-left: 10px;text-align: right">' .
      getRus($name) .
      '</td><td style="height: 1.5em;padding: 10px">' .
      $inputValue .
      '</td></tr>';

      $counter++;
  }

  $msg .= '</table>';

  return $msg;
  return $inputsg;
}

// код в этом файле формирует таблицу, для удобочитемости я прохожусь по именам полей
// и заменяю на более понятные текстовые строки
function getRus($val) {
  switch ($val) {
    case 'namePage': return 'Страница';
    case 'nameForm': return 'Имя формы';

    case 'phone_f': return 'Телефон клиента';
    case 'mail_f': return 'Почта клиента';
    case 'name_f': return 'Имя клиента';
    case 'message_f': return 'Комментарий';
    case 'messenger': return 'Как удобнее связаться';
    case 'workers': return 'Количество рабочих мест';

    case 'q-workplaces': return 'Количество рабочих мест';
    case 'q-ports': return 'Количество портов для 1 рабочего места';
    case 'q-project': return 'Есть проект?';
    case 'q-estimate': return 'Есть смета от другой компании?';

    case 'calc-info-1': return 'Дополнительная информация';
    case 'calc-info-2': return 'Дополнительная информация';

    case 'camera-1': return 'Камеры Тип 1, шт.';
    case 'camera-2': return 'Камеры Тип 2, шт.';
    case 'camera-3': return 'Камеры Тип 3, шт.';
    case 'camera-4': return 'Камеры Тип 4, шт.';
    case 'camera-5': return 'Камеры Тип 5, шт.';
    case 'camera-6': return 'Камеры Тип 6, шт.';
    case 'camera-7': return 'Камеры Тип 7, шт.';
    case 'camera-8': return 'Камеры Тип 8, шт.';

    case 'cameras-count': return 'Всего камер';
    case 'cameras-price': return 'Общая стоимость';



    default: return $val;
  }
}
