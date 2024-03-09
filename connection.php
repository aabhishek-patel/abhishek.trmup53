<?php
$host="localhost";
$username="Heyuser";
$password="F4&4p59rz";
$dbname="jagahjam_";

$connect=mysqli_connect($host,$username,$password,$dbname);

if(!$connect)
{
echo "database not connected".mysqli_connect_error();
}
else
{
//echo "db connect success";
}
?>