<?php
require("connection.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aabhishek_patel Personal Portfolio Website Design | aabhishek_patel</title>
    
    <!-- box icon -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    
    <!-- custom icon -->
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <link rel="stylesheet" href="css/user.css">
</head>
    
<body>
    
    <!-- header design -->
    <!-- <header class="header">
        <a href="#home" class="logo">Abhishek Patel</a>

        <i class="bx bx-menu" id="menu-icon"></i>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
        </nav>
    </header> -->
    
    <!-- home section design -->
    <section class="skills" id="skills">
        <div class="login-form">
            <h2>MEMBER LOGIN</h2>
            <form method="POST">
                <div class="input-field">
                    <i class='bx bxs-user' ></i>
                    <input type="text" placeholder="Username" name="username">
                </div>

                <div class="input-field">
                    <i class='bx bxs-lock' ></i>
                    <input type="password" placeholder="Password" name="password">
                </div>

                <div class="btn-box btns">
                    <button type="submit" name="signin" class="btn2">SIGN IN</button>
                </div>

                <div class="extra">
                    <a href="#">Forgot Password ?</a>
                    <a href="#">Creat an Account</a>
                </div>
            </form>
        </div>
    </section>
    
    <?php
        if(isset($_POST['signin']))
        {
            $query="SELECT * FROM `admin_login` WHERE 'username'='$_POST[username]' AND 'password'='$_POST[password]'";
            $result=mysqli_query($connect,$query);
            if(mysqli_num_rows($result))
            {
                session_start();
            }
            else
            {
                echo"<script>alert('Incorrect Password');</script>";
            }
        }
    ?>

</body>
</html>