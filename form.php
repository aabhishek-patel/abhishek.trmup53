<?php
session_start();
require "connection.php";
$fullName = $_POST["fullName"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$emailSUb = $_POST["emailSub"];
$msg = $_POST["msg"];

$insert = "INSERT INTO contact_us(fullName, email, mobile,emailSub,msg) 
VALUES ('{$fullName}','{$email}', '{$mobile}', '{$emailSUb}', '{$msg}')";

//$insert="insert into user values (null, '$name','$email','$mobile','$city', '$state','$brand','$model', '$date')";

$insert_check = mysqli_query($connect,$insert);

if($insert_check)
{
    echo"<script>alert('You have successfully submited the form. Thanks');</script>";
    header("location:index.html");
	//header("location:index.html#contact");
}
else
{
    echo"<script>alert('Someting went wrong, Pleasee try again.');</script>";
}
mysqli_close($connect);
session_destroy();
?>

// $fullName = $_POST["fullName"];
// $email = $_POST["email"];
// $mobile = $_POST["mobile"];
// $emailSUb = $_POST["emailSub"];
// $msg = $_POST["msg"];

// $conn = mysqli_connect("localhost", "root", "", "contact_us") or die("connection failed");
// $sql = "INSERT INTO contact(fullName, email, mobile,emailSub,msg)
//  VALUES ('{$fullName}','{$email}', '{$mobile}', '{$emailSUb}', '{$msg}')";
//  $result = mysqli_query($conn, $sql) or die("Query failed");

//  header("location: http://localhost/abhishek_patel/#contact");
//  mysqli_close($conn);
// ?>