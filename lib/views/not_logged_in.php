<?php
// show potential errors / feedback (from login object)
if (isset($login)) {
    if ($login->errors) {
        foreach ($login->errors as $error) {
            echo $error;
        }
    }
    if ($login->messages) {
        foreach ($login->messages as $message) {
            echo $message;
        }
    }
}
?>

<!-- login form box -->
<style>
.center {
    width: 180px;
    height: 190px;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    border:solid 1px;
    padding:5px;
    padding-left:10px;
    margin: auto;
}
</style>


<div id='hidden_login' class='center'>
<a href='#' onClick='$(hidden_login).hide()' style='float:right'>X</a>
<form method="post" action="index.php" name="loginform">

    <label for="login_input_username">Username</label>
    <input id="login_input_username" class="login_input" type="text" name="user_name" required />

    <label for="login_input_password">Password</label>
    <input id="login_input_password" class="login_input" type="password" name="user_password" autocomplete="off" required />
    <br>
    <br>
    <input type="submit"  name="login" value="Log in" />

</form>

<a href="register.php">Register new account</a>
</div>
