<?php

if ($_POST) {
  $to = "info@definedeng.com"; // your mail here
  $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
  $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
  $body = "Message: $message\nE-mail: $email \nMy details are: Name: $name, \nPhone No is: $phone";
  
  if (@mail($to, $subject, $body)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}
