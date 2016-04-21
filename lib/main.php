<?php
#require_once("php-login-minimal/classes/Login.php");
#require_once("php-login-minimal/config/db.php");


error_reporting(E_ALL);
ini_set("display_errors", 1);

set_include_path(get_include_path() . ':.');

#include_once '../settings.php';
include_once 'medoo.php';
include_once 'lib/medoo.php';
function __autoload($class_name) {
    $filename = "lib/$class_name.class.php";
#$filename = "lib/$class_name.class.php";
    if(file_exists($filename)) {
        require_once $filename;
    }
}
#date_default_timezone_set(__TIMEZONE__);

$db = new medoo([
                 'database_type' => 'mysql',
                 'database_name' => 'orim',
                 'server' => '127.0.0.1',
                 'username' => 'root',
                 'password' => 'pass',
                 'port'  => '5123',
                 'charset' => 'utf8']);

?>
