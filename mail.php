<?php
$to = "info@iskelo.net.pl";
$subject ="Response from website";
$message = "Test mail from iskelo.net.pl";
$headers = "From: code@iskelo.net.pl";

if(mail($to, $subject, $message, $headers)){
	echo"Mail send Successfuly";

}else{
	echo"Can not send mail";
}


?>