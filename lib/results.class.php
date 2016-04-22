<?php
class results{

    function getQueryPacIds($db,$query_org,$interval){
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
        foreach($datas as $data){
            $pac[] = $data['query_pac'];
        }
        return $pac; 
    }


    function getBlastResults($db,$org,$listOfPacIDs){
        $datas=$db->select("BLAST","*",[
                "AND" => [
                "query_pac" => $listOfPacIDs,
                "subject_org" => $org,
                "rank" => 1
                ]
                ]
                );

       foreach($datas as $data){
            $pacQuery[]=$data['query_pac'];
            $pacSubject[]=$data['subject_pac'];
        }

        $blast['blast'] = $datas;
        $blast['query_pac'] = $pacQuery;
        $blast['subject_pac']= $pacSubject;        
        #print "<br><br>";
        #print_r($blast);
       # print "<br><br>";
        return $blast;

    }
    function getAnnotations($db,$org,$pac){
       $datas=$db->select("annotations","*",[
                  "AND" => [
                  "query_org" => $org,
                  "query_pac" => $pac,
                  ]
                  ]
                 );
       # print "<br><br>";
       # print_r( $datas ); 
        #print "<br><br>";
        return $datas;

    }


}


?>
