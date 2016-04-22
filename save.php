<?php

require_once("lib/config/db.php");
require_once("lib/classes/Login.php");
$login = new Login();
include "lib/main.php";

if ($login->isUserLoggedIn() == true) {
    // the user is logged in. you can do whatever you want here.
    // for demonstration purposes, we simply show the "you are logged in" view.
    //include("lib/views/logged_in.php");
    echo "<h3>Successfully stored<br>
<font color='green'>Query PacID:{$_GET['pac']}</font> <br>
<font color='green'>Subject Organism:{$_GET['subject_org']}</font> <br>
to your private collection, {$_SESSION['user_name']}</h3>"; 
    $db->insert("saved_genes",[
            'query_pac'     =>$_GET['pac'],
            'subject_org'   =>$_GET['subject_org'],
            'username'      =>$_SESSION['user_name']
            ]);

    echo '<button onclick="goBack()">Go Back</button>

        <script>
        function goBack() {
            window.history.back();
        }
    </script>';

} else {


    echo "You are not logged in. The session must have expired. Log in, and you can save this query!";
}





?>

