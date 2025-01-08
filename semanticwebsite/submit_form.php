<?php
// submit_form.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Here you can add code to send an email or save the message to a database
  // For demonstration, we'll just display a thank you message

  echo "<!DOCTYPE html>
  <html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>Thank You - Food4You</title>
    <link rel='stylesheet' href='style.css'>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
        background-color: #f8f9fa;
      }
      h1 {
        color: #28a745;
      }
      a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        text-decoration: none;
        color: white;
        background-color: #007bff;
        border-radius: 5px;
      }
      a:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <h1>Thank You, $name!</h1>
    <p>Your message has been received. We'll get back to you shortly.</p>
    <a href='index.html'>Back to Home</a>
  </body>
  </html>";
} else {
  // If the form was not submitted via POST, redirect to the contact page
  header("Location: contactus.html");
  exit();
}
?>
