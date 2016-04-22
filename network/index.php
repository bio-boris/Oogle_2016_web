<!-- 
Author: Christian Followell
Property of University of Illinois Applied Research Institute

-->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Clustering Graphic</title>
<link rel="stylesheet" href="_/base.css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="style.css">
</head>
<body>

<button id='linkToggle'>Hide Links</button>

<div id='menu'>
<div id='accordion'>
<div class='header'>Numerical Link Filters</div>
<div id='LinkSliders'></div>
<div class='header'>Categorical Link Filters</div>
<div id='CatLinkFilters'></div>
<div class='header'>Link Length Filters</div>
<div id='LengthLinkFilters'></div>			
<div class='header'>Numerical Node Filters</div>
<div id='NodeSliders'></div>			
<div class='header'>Categorical Node Filters</div>
<div id='CatNodeFilters'></div>
<div class='header'>Color By</div>
<div id='ColorFilters'></div>
</div>
</div>

<div id='svg'></div>

<div class='absolute tooltip'></div>

<div class='LinkInfoTooltip'></div>

<div class='NumInfoTooltip'></div>

<div id='scatterTooltip'></div>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="_/d3.min.js"></script>

<?php
include "../lib/main.php";
include_once '../lib/medoo.php';
include_once '../lib/results.class.php';

if(isset($_GET['insert'])){
    $results = new results();
    $job = $db->select("query","*",['session'=>$_GET['insert']]);

    $post = unserialize($job[0]['post']);
    $query_org  = $post['query_dropdown'];
    $subject_org = $post['subject_dropdown'];
    $intervals  = $post['query_input'];

#Get pacIDS for matching queries
    $intervals_array = preg_split("/\s|\r\n|\n|\r/", $intervals);


    foreach($intervals_array as $interval){
        if($interval == $_GET['interval']){
            $pacIDs = $results->getQueryPacIDs($db,$query_org,$interval);
            $query_blast = $results->getBlastResults($db,$subject_org,$pacIDs);
            $query_blast_result = $query_blast['blast'];
            $query_pac=$query_blast['query_pac'];
#  echo "<pre>"; 
#  print_r($query_blast);
#  echo "</pre>";

            $subject_pac=$query_blast['subject_pac'];
            $subject_blast = $results->getBlastResults($db,$query_org,$subject_pac);
            $subject_blast_result = $subject_blast['blast'];
            $query_annotations = $results->getAnnotations($db,$query_org,$query_blast['query_pac']);
            $subject_annotations = $results->getAnnotations($db,$subject_org,$query_blast['subject_pac']);

        
            print "<div id='qblast' name='$interval' style='display:none'>";
            print json_encode($query_blast);
            print "</div>\n"   ;     
            
            print "<div id='qanno' name='$interval' style='display:none'>";
            print json_encode($query_annotations);
            print "</div>\n"  ;      
            
            print "<div id='sblast' name='$interval' style='display:none'>";
            print json_encode($subject_blast);
            print "</div>\n"    ;    
            
            print "<div id='qanno' name='$interval' style='display:none'>";
            print json_encode($subject_annotations);
            print "</div>\n"   ;     
    
        }
    }
}

?>






<!--<script src="filter.js"></script>--> 
<!--	<script src="script.js"></script> -->
</body>
</html>
