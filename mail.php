<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];



$to = 'valery_po85@mail.ru';
$date = date ("d.m.Y"); 
$time = date ("h:i");
$from = $email;
$subject = 'Заявка с сайта delivery';


$msg="
Имя: $name /n
Почта: $email /n
Текст: $text"; 	
mail($to, $subject, $msg, "From: $from ");

?>
<p>Привет, форма отправлена</p>