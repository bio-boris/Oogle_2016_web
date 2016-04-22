<?php

require_once("lib/config/db.php");
require_once("lib/classes/Login.php");
require_once 'lib/medoo.php';
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
</head>
<body>
<div class='container'>
<form class='form-inline' action='<?php echo $_SERVER['PHP_SELF'] ?>' method='get' id='my_form'>
<?php
echo "<h1><a href='queries.php'> Saved Queries </a> </h1>";
echo "<h2>Private collection of Genes for <b>" . ucfirst($_SESSION['user_name']) . "</b></h2>";
echo "<h5><a href='index.php'>See Main Page</a></h5>";
#echo "This page demonstrates the results of the insert";

if(isset($_GET['delete_id'])){
    echo "<br>";
    $database->delete('saved_genes',['id'=>$_GET['delete_id']]);
#    $database->debug()->delete('query',['id'=>$_GET['delete_id']]);
}


$queries=$database->select("saved_genes",'*');

echo "<table class='table'>";
echo "<thead><tr>
<th>ID</th>
<th>Query Pac</th>
<th>Subject Org</th>
</tr></thead>";
foreach($queries as $query){

    $needToSkip = 0;
    foreach($query as $key=>$val){
        if($key =='private' && $val==0){
            $needToSkip = 1;
        }
        $username = $_SESSION['user_name'];
        if($key=='username' && $val !=$username){
            $needToSkip=1;
        }

    }
    if($needToSkip){
        continue;
    }
    echo "<tr>";
    foreach($query as $key=>$val){
        if($key=='session'){
            echo "<td><a href='table.php?insert=$val'>$val</a></td>";
        }
        else if($key =='username' || $key=='private'){

        }
        elseif($key =='post'){
            $array = unserialize($val);
            echo "<td><pre>";
            if(sizeof($array) <= 1){
                echo "</pre></td>";
            }
            else{
                foreach($array as $k=>$v){
                    echo "$k:$v\n";
                }
                echo "</pre></td>";
            }
        }
        else{
            echo "<td>$val</td>";   

        }
    }

    $id = $query['id'];
    echo "<td><a href='saved_genes.php?delete_id=$id' >X</a></td>";
    echo "<tr>";

}
echo "</table>"

?>

</form>

</div>
</body>
<html>
