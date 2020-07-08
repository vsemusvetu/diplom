<?php 
    if(isset($_POST['submit'])){
    $to = "vsemusvetu@mail.ru"; 
    $from = "nadya.romanenko@mail.ru"; 
    
    $first_name = $_POST['first_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $subject = "Форма отправки сообщений с сайта vsemusvetu";

    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
        {
        show_error("<br /> Не корректный Е-mail");
        }
    
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $first_name
E-mail: $email
Номер телефона: $phone
Текст сообщения: $message
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле кому.";  
     
$headers = "From: $from \r\n";
     
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Успех! Спасибо, " . $first_name . ", я скоро свяжусь с вами.";
echo "<br /><br /><a href='http://www.vsemusvetu.ru/'>Вернуться на сайт.</a>";
}
?>
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://www.vsemusvetu.ru/");}
window.setTimeout("changeurl();",2500);
</script>