<?php
if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$message = $_POST['message'];
	$subject = "Mail from server";
	$mailTo = "info@iskelo.net.pl";
	$headers = "From: $mailFrom";
	$txt = "You have received an e-mail from".$name.".\n\n".$message;

	mail($mailTo,$subject, $txt, $headers);

	/*if(mail($mailTo,$subject, $txt, $headers)){
		echo"Mail send Successfuly";
	}else{
		echo"Can not send mail";
	}*/
	
	header("Location: index.html?mailsend");
}


