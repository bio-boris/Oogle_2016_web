<?php

require_once 'lib/medoo.php';


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
echo "<h1><a href='queries.php'> Team 27 - CS 411 Queries </a> </h1>";
echo "<h5><a href='index.php'>See Main Page</a></h5>";
echo "This page demonstrates the results of the insert";

if(isset($_GET['delete_id'])){
    echo "<br>";
    $database->delete('query',['id'=>$_GET['delete_id']]);
    $database->debug()->delete('query',['id'=>$_GET['delete_id']]);
}


$queries=$database->select("query",'*');

echo "<table class='table'>";
echo "<thead><tr>
            <th>ID</th>
            <th>Time</th>
            <th>POST</th>
            <th>Private</th>
            <th>Session</th>
            <th>Delete</th>
                </tr></thead>";
foreach($queries as $query){

    echo "<tr>";
    
    foreach($query as $key=>$val){
        echo "<td>$val</td>";   
    }
    $id = $query['id'];
    echo "<td><a href='queries.php?delete_id=$id' >X</a></td>";
    echo "<tr>";

}
echo "</table>"

?>

</form>

</div>
</body>
<html>
