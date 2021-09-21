<?php
if((isset($_POST['phone_f'])&&$_POST['phone_f']!="")){ 
	
	    $to = "b2b@exasystems.ru, anatoly.efanenkov@yandex.ru, 9993974@mail.ru, vinovet.g08@gmail.com";
        $subject = 'Заполнена форма с сайта EXASystems';
		$from_title = 'Заполнена форма с сайта EXASystems';
		$from_mail = "info@exasystems.ru";
		
		$message ='
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Форма: '.$_POST['nameForm'].'</p>
					<p>Телефон: '.$_POST['phone_f'].'</p>                                  
					
				</body>
			</html>';
		
		if((isset($_POST['mail_f'])&&$_POST['mail_f']!="")){
			$message ='
		<html>
			<head>
				<title>'.$subject.'</title>
            </head>
			<body>
				<p>Форма: '.$_POST['nameForm'].'</p>
				<p>Телефон: '.$_POST['phone_f'].'</p>                                        
				<p>Почта: '.$_POST['mail_f'].'</p>                                        
         </body>
		</html>';
		} 
		
        $headers = "From: ".$from_title." <".$from_mail.">\r\n";
        $headers .= "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject , $message, $headers);
}
else{
	echo "error";
}
?>





