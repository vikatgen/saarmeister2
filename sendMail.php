<?php
$first_name= $_POST['first_name'];
$your_email= $_POST['email'];
$telephone= $_POST['telefon'];
$your_message= $_POST['tekst'];
$message = "
 \n $first_name \n 
 \n $your_email \n 
 \n $telephone \n 
 \n $your_message \n
";
echo $message;
include "PHPMailer_5.2.4/class.phpmailer.php"; 


$mail = new PHPMailer;
 $mail->isSMTP();                                      
 $mail->Host = 'smtp.hostinger.ee';

 $mail->SMTPAuth = true;          
 $mail->Username = 'info@saarmeister.ee';
 $mail->Password = '522%yFy6225u';           
 $mail->SMTPSecure = 'tls';              
 $mail->Port = 587;                      
 $mail->setFrom('info@saarmeister.ee', 'Mailer');
 $mail->addAddress($your_email, 'Name');
 $mail->isHTML(true);                              
 $mail->Subject = 'Uus päring Saarmeister kodulehelt';
 $mail->Body    = $message;
 $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

 if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
 } else {
    echo 'Message has been sent';
 }
?>