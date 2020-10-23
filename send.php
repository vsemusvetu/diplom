<?php

if (isset($_POST["name"])) {

   $name = $_POST['name'];
   $phone = $_POST['tel'];
   $email = $_POST['email'];
   $sub = $_POST['sub'];

   $my_email = 'vsemusvetu@mail.ru'; 
   $sender_email = '<robot@mysite.ru>';
   $title = "Письмо с твоего сайта";

   $mes = "
 Имя: $name\n
 Телефон: $phone\n
 E-mail: $email\n
 Тема обращения: $sub\n
";

   $send = mail ($my_email,$title,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sender_email");
   
echo "Успех! Спасибо, " . $name . ", я скоро свяжусь с вами.";
echo "<br /><br /><a href='http://www.vsemusvetu.ru/'>Вернуться на сайт.</a>";
}

?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://www.vsemusvetu.ru/");}
window.setTimeout("changeurl();",2500);
</script>