
<div class='container'>
<?php
// show potential errors / feedback (from registration object)
if (isset($registration)) {
    if ($registration->errors) {
        foreach ($registration->errors as $error) {
            echo "<div align='center' style='color:red'>$error</div>";
        }
    }
    if ($registration->messages) {
        foreach ($registration->messages as $message) {
            echo "<div align='center' style='color:blue'>$message</div>";
        }
    }
}
?>

<!-- register form -->

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link href="signin.css" rel="stylesheet">


<form method="post" action="register.php" name="registerform" class='form-signin'>

<h2 class="form-signin-heading">Registration</h2>
<input id="login_input_username"        placeholder='Username'               class="form-control" type="text" pattern="[a-zA-Z0-9]{2,64}" name="user_name" required />
<input id="login_input_email"           placeholder='E-mail'                 class="form-control" type="email" name="user_email" required />
<input id="login_input_password_new"    placeholder='Password (6 char min)'  class="form-control" type="password" name="user_password_new" pattern=".{6,}" required autocomplete="off" />
<input id="login_input_password_repeat" placeholder='Repeat password'        class="form-control" type="password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off" />
<input type="submit"  name="register" value="Register" />
<br><br>
<a href="index.php">Back To Main Menu</a>
</form>

</div>
<!-- backlink -->
