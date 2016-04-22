<?php

require_once("lib/config/db.php");
require_once("lib/classes/Login.php");
$login = new Login();
include "lib/main.php";





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
<script type="text/javascript" src="http://www.kunalbabre.com/projects/table2CSV.js" > </script> 


</head>
<body>
<div class='container'>

<h1> Result for Query <?php echo $_GET['insert']; ?> </h1>
<h2><a href='index.php'>Start Over</a> </h2>
<h2><a href='queries.php'>Queries</a> </h2>
<?php

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
        if($interval != ''){
            print "<h4>Working on interval[ $interval ] on <b>$query_org</b> against <b>$subject_org</b><br><br></h4>";
            $pacIDs = $results->getQueryPacIDs($db,$query_org,$interval);
            $query_blast = $results->getBlastResults($db,$subject_org,$pacIDs);
            $query_blast_result = $query_blast['blast'];
            $query_pac=$query_blast['query_pac'];
            echo "<pre>"; 
            print_r($query_blast);
            echo "</pre>";

            $subject_pac=$query_blast['subject_pac'];
            $subject_blast = $results->getBlastResults($db,$query_org,$subject_pac);
            $subject_blast_result = $subject_blast['blast']; 
            $query_annotations = $results->getAnnotations($db,$query_org,$query_blast['query_pac']);           
            $subject_annotations = $results->getAnnotations($db,$subject_org,$query_blast['subject_pac']);           

            $saveHeader='';
            if ($login->isUserLoggedIn() == true) {
                $saveHeader="<th>Save</th>"   ; 
            }
            echo "<table class='table table-bordered table-striped' id='$interval'>";
            $interval_number=0;
            echo "<thead><tr>
                $saveHeader 
                <th>Query Accession</th>
                <th>Subject Accession</th>
                <th>Rank</th>
                <th>Query_ID</th>
                <th>Subject_ID</th>
                <th>%ID</th>
                <th>Align_Len</th>
                <th>Expect</th>
                <th>Bit</th>
                <th>Subject_TopHit_ACC</th>
                <th>Subject_TopHit_PAC</th>
                <th>%ID</th>
                <th>Align_Len</th>
                <th>Expect</th>
                <th>Bit</th>
                <th>Annotations for Query</th>
                <th>Annotations For Subject</th>
                <th>Common Annotations</th>
                </tr>
                </thead>";
#$subject_pac=$query_blast['subject_pac'];
#          $subject_blast = $results->getBlastResults($db,$query_org,$subject_pac);
#        $subject_blast_result = $subject_blast['blast'];
#         $query_annotations = $results->getAnnotations($db,$query_org,$query_blast['query_pac']);
#          $subject_annotations = $results->getAnnotations($db,$subject_org,$query_blast['subject_pac']);
            foreach($query_blast_result as $row){
                print "<tr>";
                if ($login->isUserLoggedIn() == true) {
                    $pac= $row['query_pac'];
                    $hit=$query_blast_result[$interval_number]['subject_org'];
                    echo "<td><a href='save.php?pac=$pac&subject_org=$hit'>Save gene</a></td>";
                }
                print "<td>".$row['query_id']."</td>";
                print "<td>".$row['subject_id']."</td>";
                print "<td>".$row['rank']."</td>";
                print "<td>".$row['query_pac']."</td>";
                print "<td>".$row['subject_pac']."</td>";
                print "<td>".$row['percent_id']."</td>";
                print "<td>".$row['alignment_length']."</td>";
                print "<td>".$row['expect']."</td>";
                print "<td>".$row['bitscore']."</td>";

                foreach($subject_blast_result as $s_row){
                    if($row['subject_pac'] == $s_row['query_pac']){
                        if($s_row['subject_pac'] == $row['query_pac']){
                            print "<td><font color='red'>{$s_row['subject_id']}</font></td>";
                            print "<td><font color='red'>{$s_row['subject_pac']}</font></td>";

                        }
                        else{
                            print "<td>{$s_row['subject_id']}</td>";
                            print "<td>{$s_row['subject_pac']}</td>";
                        }    
                        print "<td>{$s_row['percent_id']}</td>";
                        print "<td>{$s_row['alignment_length']}</td>";
                        print "<td>".$s_row['expect']."</td>";
                        print "<td>".$s_row['bitscore']."</td>";

                        break;
                    }
                }
                foreach($query_annotations as $annotation){
                    if($annotation['query_pac'] == $row['query_pac']){
                        $query_annotations_array = $annotation;
                        print "<td>";
                        print "<table border=1 style='border:gray'>";
                        print "<thead><th>Annotation</th><th>Val</th></thead>";
                        foreach($annotation as $key=>$val){
                            if(isset($val) && strlen($val) >1){
                                print "<tr><td>$key </td><td>$val</td>";
                            }
                        }
                        print "</table>";
                        print "</td>";
                    }
                }

                foreach($subject_annotations as $annotation){
                    if($annotation['query_pac'] == $row['subject_pac']){
                        $subject_annotations_array = $annotation;
                        print "<td>";
                        print "<table border=1 style='border:gray' >";
                        print "<thead><th>Annotation</th><th>Val</th></thead>";
                        foreach($annotation as $key=>$val){
                            if(isset($val) && strlen($val) >1){
                                print "<tr><td>$key </td><td>$val</td></tr>";
                            }
                        }
                        print "</table>";
                        print "</td>";
                    }
                }
            
                $common_annot;
                foreach($query_annotations_array as $key=>$val){
                    foreach($subject_annotations_array as $key2=>$val2){
                        if(strlen($val) > 1 && $val == $val2){
                            $common_annot[$val2]=null ;
                        }
                    }
                }
                print "<td>";
                foreach($common_annot as $k=>$v){
                        print "$k</br>";
                }
                print "</td>";

#now find blast results for subject, 
#can't go by iterator due to duplicates being eliminated
                echo "</tr>";


                $interval_number++;


            }
            echo '<pre>';
            print "<b>QUERY BLAST</b>\n";
# print_r($query_blast);
            print json_encode($query_blast);
            print "\n\n<b>QUERYANNOTATIONS</b>\n";
# print_r($query_annotations);
            print json_encode($query_annotations);
            print "\n\n<b>SUBJECT BLAST</b>\n";
# print_r($subject_blast);
            print json_encode($subject_blast);
            print "\n\n<b>SUBJECTANNOTATIONS</b>\n";
#print_r($subject_annotations);
            print json_encode($subject_annotations);

            echo '</pre>';
        }
        //displayBlast($blast_results);
    }

}


?>

<?php
/*
   function getQueryPacIds($db,$query_org,$intervals){
   $query_genes_array = explode(" ", $intervals);
   foreach($query_genes_array as $interval){
   $chr_interval = explode(":",$interval);
   $location = explode ("-",$chr_interval[1]);
   $chr = $chr_interval[0];
   $start = $db->quote($location[0]);
   $stop = $db->quote($location[1]);
   $chr = $db->quote($chr);
   $query_org_temp = $db->quote($query_org);

   $query = "SELECT query_pac from CHR where chr=$chr AND query_org=$query_org_temp " . 
   "AND ((start>=$start AND start <=$stop ) OR " .
   "(stop <=$stop AND stop >=$start) OR" .
   "(start<=$start AND stop>=$stop) ) ORDER BY START"; 
   $datas = $db->query($query);
   $pacIDs;
   foreach($datas as $data){
   $pacID[] = $data['query_pac'];
   }  
   return $pacIDs;
   }



   }
 */
?>


</div>
</body>
</html>
