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
include "lib/main.php";
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
            print "pacID=";       
            print_r($pacIDs);
            $query_blast = $results->getBlastResults($db,$subject_org,$pacIDs);
            $query_blast_result = $query_blast['blast'];
            $subject_pac=$query_blast['subject_pac'];
            $subject_blast = $results->getBlastResults($db,$query_org,$subject_pac);
            $subject_blast_result = $subject_blast['blast']; 

#Now get annotations
            $query_annotations = $results->getAnnotations($db,$query_org,$query_blast['query_pac']);           
            $subject_annotations = $results->getAnnotations($db,$subject_org,$query_blast['subject_pac']);           

            echo "<table class='table' id='$interval'>";
            $i=0;
            echo "<thead><tr>
                <th>Query</th>
                <th>Subject</th>
                <th>%ID</th>
                <th>Align_Len</th>
                <th>Expect</th>
                <th>Bit</th>
                <th>queryPAC</th>
                <th>subjPAC</th>
                <th>Hit for Subj</th>
                <th>%ID</th>
                <th>Align_Len</th>
                <th>Expect</th>
                <th>Bit</th>
                <th>HitPAC</th>
                <th>Annotations for Query</th>
                <th>Annotations For Subject</th>
                </tr>
                </thead>";
            foreach($pacIDs as $pac){
                echo "<tr>";

                foreach($query_blast_result[$i] as $key=>$val){
                    if($key=='query_org' || $key=='subject_org' || $key=='rank'){
                        continue;
                    }
                    if($key=='subject_pac'){
                        $subject_pac=$val;
                    }
                    if($key=='query_id'){
                        $query_id=$val;
                    }
                    print "<td>$val</td>";
                }
                foreach($subject_blast_result as $result){
                    if($result['query_pac'] == $subject_pac){
                        foreach($result as $key=>$val){
                            if($key=='query_org' || $key=='subject_org' || $key=='rank' ||
                                    $key=='query_id' || $key=='query_pac'){
                                continue;
                            }
                            if($key=='subject_id'){
                                if($val==$query_id){
                                    print "<td><b><font color='red'>$val</font></b></td>";
                                }
                                else{
                                    print "<td>$val</td>";

                                }   
                            }
                            else{
                                print "<td>$val</td>";
                            }        
                        }
                    }
                }

                foreach($query_annotations as $annotation){
                    if($annotation['query_pac'] == $pac){
                        print "<td>";
                        foreach($annotation as $key=>$val){
                            print "$key:$val<br>";
                        }
                        print "</td>";
                    }
                }
                foreach($subject_annotations as $annotation){
                    if($annotation['query_pac'] == $subject_pac){
                        print "<td>";
                        foreach($annotation as $key=>$val){
                            print "$key:$val<br>";
                        }
                        print "</td>";
                    }
                }
#now find blast results for subject, 
#can't go by iterator due to duplicates being eliminated
                echo "</tr>";


                $i++;


            }
            echo "</table>"; 

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
