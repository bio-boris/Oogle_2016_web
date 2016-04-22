<?php
require_once("lib/config/db.php");
require_once("lib/classes/Login.php");

require_once 'lib/medoo.php';
require_once 'lib/main.php';

// create a login object. when this object is created, it will do all login/logout stuff automatically
// so this single line handles the entire login process. in consequence, you can simply ...
$login = new Login();

// Initialize
// Move this to config
$database = new medoo([
        'database_type' => 'mysql',
        'database_name' => 'orim',
        'server' => '127.0.0.1',
        'username' => 'root',
        'password' => 'pass',
        'port'  => '5123',
        'charset' => 'utf8'
        ]);

if(isset($_POST['go'])){
#Validate
#Save query to database
    $validated=1;
    if($validated){
#$insert=insert($_POST);
#$insertID=$insert['id'];
#$error=$insert['error'];
        $error = null;
        if(defined($error)){

        }
        else{
            $insertID='123';
            $POST = $_POST;
            $private = isset($_POST['saved'])?1:0;
            $username = isset($_SESSION['user_name'])?($_SESSION['user_name']):'anonymous';
            $session=insert($database,$POST,$private,$username);
            header("Location: table.php?insert=$session");
        }
    }
    else{
        print "Error";
    }

}




?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>ORIM -- Oogle -- Ortholog Interval Mining </title>
<meta charset="utf-8">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<script type="text/javascript">
$(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
        });

</script>


</head>
<body>
<div class='container'>

<?php
#print_r($_POST);
#print_r($_GET);

$orgs = file('available_org');

$queryOrg=isset($_POST['query_dropdown'])?$_POST['query_dropdown']:null;
$subjectOrg=isset($_POST['subject_dropdown'])?$_POST['subject_dropdown']:null;

$query_dropdown = orgDropdown($orgs,$queryOrg,"query_dropdown");
$subject_dropdown = orgDropdown($orgs,$subjectOrg,"subject_dropdown");

$tooltip='<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="IGV Format (Chr:Start-Stop)" ><u>?</u></a>';
#if not loggedin
echo "<div class='pull-right'>";
$welcome_msg   = isset($_SESSION['user_name'])  ? "Welcome back, {$_SESSION['user_name']}." : 'Welcome Anonymous.<br>';
$logout_link   = isset($_SESSION['user_name'])  ? "<li><a href='{$_SERVER['PHP_SELF']}?logout'>Logout</a><br></li>":'';
$register_link    = !isset($_SESSION['user_name'])  ? "<li><a href='register.php'>Register</a><br></li>" :'';
$saved_searches   = isset($_SESSION['user_name'])  ? "<li><a href='saved_searches.php'>Saved Searches</li>" :'';
$saved_proteins   = isset($_SESSION['user_name'])  ? "<li><a href='saved_genes.php'>Saved Genes</li>" :'';

$login_link    = !isset($_SESSION['user_name'])  ? "<li><a href='#' onClick=\"$(hidden_login).fadeIn()\">Login</a><br></li>" :'';

echo "$welcome_msg <ul> $login_link$register_link $saved_searches $saved_proteins $logout_link </ul>";

#echo "Welcome $username.</br><ul><li> <a href='register.php'>Register</a><br></li> <a href='#' onCLick=\"$(hidden_login).fadeIn()\">Login</a> $logout "; 
echo "</div>";
#lese
#echo "
#echo "<div class='pull-right'>";
#echo "Welcome $_USER.</br> <a javascrip='logout'> Log Out</a>"; 
#echo "</div>";
#$login = new Login();


if ($login->isUserLoggedIn() == true) {
    // the user is logged in. you can do whatever you want here.
    // for demonstration purposes, we simply show the "you are logged in" view.
    //include("lib/views/logged_in.php");
} else {
    // the user is not logged in. you can do whatever you want here.
    // for demonstration purposes, we simply show the "you are not logged in" view.
    include("lib/views/not_logged_in.php");
}




echo "<h1><a href='index.php'> Team 27 - CS 411 </a> </h1>";
echo "<h5><a href='queries.php'>See Public Saved Queries</a></h5>";
echo "<h4>Step 1: Select a subject organism's genome.</h4>";
echo "<form name='oogle' id='oogle' class='form-inline' action='{$_SERVER['PHP_SELF']}' method='post'>";
echo $query_dropdown;
echo chrDropdown($database,$queryOrg);
echo "<h4>Step 2: Choose intervals on the genome: $tooltip </h4>";
$query_interval = isset($_POST['query_input'])?$_POST['query_input']:'';
echo "<textarea class='form-control' name='query_input' placeholder='Chr1:1-10000'>$query_interval</textarea><br>";

?>

<?php
echo "<h4>Step 3: Select an organism to search against.</h4>";
echo $subject_dropdown;
echo chrDropdown($database,$subjectOrg);
#echo "<h4>Step 4: Choose intervals on the genome: $tooltip</h4>";
#echo "<textarea class='form-control' name='subject_input'>{$_POST['subject_input']}</textarea>"

?>
<br>
<br>
<input type='submit' value="Submit Query" name='go'>
<input type='checkbox' name='saved' <?php if(isset($_POST['saved'])){ echo "checked";} ?> > Save Search </input>
</form>

<?
function orgDropdown($orgs,$selected,$name){
    $html = "<select name='$name' class='form-control' onchange='$(\"#oogle\").submit()' >";
    $html .= "<option>Select Organism</option>";
    foreach($orgs as $org){
        $org = rtrim($org);
        if($org == $selected){
#print "Selected='$selected' and ORG='$org'<br>";
            $select = 'selected';
        }
        else{
            $select = '';
        }
        $html .= "<option value='$org' name='$org' $select>$org</option>";
    }
    return "$html</select>";
}
function chrDropdown($db,$org){
        $chrs= $db->select("chrUnique","*",['query_org' =>$org]);        
        $dropdown = "<select class='form-control'>";

        foreach($chrs as $chr){
        $dropdown .= "<option value='1'>" . $chr['chr'] . "</option>";
        }
        $dropdown .= "</select>";
        return $dropdown;
        }

        function insert($db,$post,$private=1,$username){
        $time =time();
        $session = md5($time);

        $serial = serialize($post);
        $debug = $db->insert("query",[
          'id'=>null,
          'date'=>null,
          'private'=>"$private",
          'username'=>$username,
          'post'=>$serial,
          'session'=>$session,
          ]);
         
        return $session; 
#    print "<br><br>SESSION=$session based on $time" ;

        }


?>


</div>
</body>
<html>
