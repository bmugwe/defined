<?php 

if(isset($_POST['submit'])) {
    $mailto = "info@definedeng.com";
    // Email data
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $visitor_phone = $_POST['phone_number'];
    $message = $_POST['message'];

    $subject = "Message from Website Enquiry";
    // Message body
    $message2 = "Dear David, \n"
    . "I am " . $name . "\n" . "My phone Number is" . "\n". $visitor_phone . "\n"
    . "\n". $message . "\n" . "Regards";

    $headers = "From: " . $visitor_email;

    $result1 = mail($mailto, $subject, $message, $headers);

    if ($result1 && $result2) {
        $success = "Your Message was sent Successfully!";
      } else {
        $failed = "Sorry! Message was not sent, Try again Later.";
      }
     
    }
?>