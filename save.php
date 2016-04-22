<?php
   
   require_once("lib/config/db.php");
   require_once("lib/classes/Login.php");
   $login = new Login();
   include "lib/main.php";
 
if ($login->isUserLoggedIn() == true) {
    // the user is logged in. you can do whatever you want here.
    // for demonstration purposes, we simply show the "you are logged in" view.
    //include("lib/views/logged_in.php");
   echo "About to insert {$_GET['pac']} and {$_GET['hit']} for {$_SESSION['user_name']}"; 
   $db->insert("saved_genes");

} else {
    

echo "You are not logged in. The session must have expired. Log in, and you can save this query!";
}
  
   
   
  
  
 ?>

