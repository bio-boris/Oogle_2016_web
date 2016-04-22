$(document).ready(function() {


		$( "#accordion" ).accordion({
			collapsible: true,
			heightStyle: "fill"
		});

//var qblast = {"blast":[{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.1","subject_id":"GRMZM2G058496_P02","percent_id":"45","alignment_length":"218","expect":"3e-52","bitscore":"170","rank":"1","query_pac":"19655142","subject_pac":"31012670"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.2","subject_id":"GRMZM2G058496_P02","percent_id":"42","alignment_length":"170","expect":"2e-33","bitscore":"120","rank":"1","query_pac":"19655143","subject_pac":"31012670"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01010.1","subject_id":"GRMZM2G125777_P01","percent_id":"39","alignment_length":"157","expect":"4e-25","bitscore":"108","rank":"1","query_pac":"19656964","subject_pac":"31048430"}],"query_pac":["19655142","19655143","19656964"],"subject_pac":["31012670","31012670","31048430"]};
//var qanno = [{"query_org":"Athaliana_167_TAIR10","query_pac":"19656964","locusName":"AT1G01010","transcriptName":"AT1G01010.1","peptideName":"AT1G01010.1","Pfam":"PF02365","Panther":"PTHR31989,PTHR31989:SF5","KOG":"","KEGG\/EC":"","KO":"","GO":"GO:GO:0006355,GO:GO:0003677","Best-hit-arabi-name":null,"arabi-symbol":null,"arabi-defline":null,"Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Athaliana_167_TAIR10","query_pac":"19655142","locusName":"AT1G01020","transcriptName":"AT1G01020.1","peptideName":"AT1G01020.1","Pfam":"PF04161","Panther":"PTHR14467","KOG":"KOG3134","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":null,"arabi-symbol":null,"arabi-defline":null,"Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Athaliana_167_TAIR10","query_pac":"19655143","locusName":"AT1G01020","transcriptName":"AT1G01020.2","peptideName":"AT1G01020.2","Pfam":"PF04161","Panther":"PTHR14467","KOG":"KOG3134","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":null,"arabi-symbol":null,"arabi-defline":null,"Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null}];
//var sblast = {"blast":[{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P02","subject_id":"AT1G01020.1","percent_id":"45","alignment_length":"218","expect":"3e-58","bitscore":"184","rank":"1","query_pac":"31012670","subject_pac":"19655142"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G125777_P01","subject_id":"AT5G04410.1","percent_id":"70","alignment_length":"164","expect":"2e-80","bitscore":"266","rank":"1","query_pac":"31048430","subject_pac":"19671101"}],"query_pac":["31012670","31048430"],"subject_pac":["19655142","19671101"]};
//var sanno = [{"query_org":"Zmays_284_5b+","query_pac":"31012670","locusName":"GRMZM2G058496","transcriptName":"GRMZM2G058496_T02","peptideName":"GRMZM2G058496_P02","Pfam":"PF04161","Panther":"PTHR14467","KOG":"KOG3134","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":"AT1G01020.1","arabi-symbol":"ARV1","arabi-defline":"Arv1-like protein","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Zmays_284_5b+","query_pac":"31048430","locusName":"GRMZM2G125777","transcriptName":"GRMZM2G125777_T01","peptideName":"GRMZM2G125777_P01","Pfam":"PF02365","Panther":"PTHR31989,PTHR31989:SF43","KOG":"","KEGG\/EC":"","KO":"","GO":"GO:GO:0006355,GO:GO:0003677","Best-hit-arabi-name":"AT5G04410.1","arabi-symbol":"anac078,NAC2","arabi-defline":"NAC domain containing protein 2","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null}];

//var qblast = {"blast":[{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.1","subject_id":"GRMZM2G058496_P02","percent_id":"45","alignment_length":"218","expect":"3e-52","bitscore":"170","rank":"1","query_pac":"19655142","subject_pac":"31012670"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.1","subject_id":"GRMZM2G058496_P01","percent_id":"62","alignment_length":"77","expect":"1e-30","bitscore":"110","rank":"2","query_pac":"19655142","subject_pac":"31012671"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.1","subject_id":"GRMZM2G159291_P06","percent_id":"53","alignment_length":"40","expect":"3e-08","bitscore":"50","rank":"3","query_pac":"19655142","subject_pac":"30983430"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.2","subject_id":"GRMZM2G058496_P02","percent_id":"42","alignment_length":"170","expect":"2e-33","bitscore":"120","rank":"1","query_pac":"19655143","subject_pac":"31012670"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01020.2","subject_id":"GRMZM2G058496_P01","percent_id":"62","alignment_length":"77","expect":"5e-31","bitscore":"109","rank":"2","query_pac":"19655143","subject_pac":"31012671"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01010.1","subject_id":"GRMZM2G125777_P01","percent_id":"39","alignment_length":"157","expect":"4e-25","bitscore":"108","rank":"1","query_pac":"19656964","subject_pac":"31048430"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01010.1","subject_id":"GRMZM2G003715_P01","percent_id":"39","alignment_length":"157","expect":"5e-25","bitscore":"108","rank":"2","query_pac":"19656964","subject_pac":"31003639"},{"query_org":"Athaliana_167_TAIR10","subject_org":"Zmays_284_5b+","query_id":"AT1G01010.1","subject_id":"GRMZM2G167492_P01","percent_id":"34","alignment_length":"161","expect":"8e-24","bitscore":"104","rank":"3","query_pac":"19656964","subject_pac":"30976080"}],"query_pac":["19655142","19655142","19655142","19655143","19655143","19656964","19656964","19656964"],"subject_pac":["31012670","31012671","30983430","31012670","31012671","31048430","31003639","30976080"]};
//var qanno = [{"query_org":"Athaliana_167_TAIR10","query_pac":"19656964","locusName":"AT1G01010","transcriptName":"AT1G01010.1","peptideName":"AT1G01010.1","Pfam":"PF02365","Panther":"PTHR31989,PTHR31989:SF5","KOG":"","KEGG\/EC":"","KO":"","GO":"GO:GO:0006355,GO:GO:0003677","Best-hit-arabi-name":null,"arabi-symbol":null,"arabi-defline":null,"Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Athaliana_167_TAIR10","query_pac":"19655142","locusName":"AT1G01020","transcriptName":"AT1G01020.1","peptideName":"AT1G01020.1","Pfam":"PF04161","Panther":"PTHR14467","KOG":"KOG3134","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":null,"arabi-symbol":null,"arabi-defline":null,"Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Athaliana_167_TAIR10","query_pac":"19655143","locusName":"AT1G01020","transcriptName":"AT1G01020.2","peptideName":"AT1G01020.2","Pfam":"PF04161","Panther":"PTHR14467","KOG":"KOG3134","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":null,"arabi-symbol":null,"arabi-defline":null,"Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null}];
//var sblast = {"blast":[{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G167492_P01","subject_id":"AT3G17730.1","percent_id":"59","alignment_length":"152","expect":"7e-57","bitscore":"190","rank":"1","query_pac":"30976080","subject_pac":"19660138"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G167492_P01","subject_id":"AT5G17260.1","percent_id":"62","alignment_length":"152","expect":"4e-56","bitscore":"195","rank":"2","query_pac":"30976080","subject_pac":"19669075"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G167492_P01","subject_id":"AT1G65910.1","percent_id":"61","alignment_length":"152","expect":"2e-55","bitscore":"196","rank":"3","query_pac":"30976080","subject_pac":"19651681"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G159291_P06","subject_id":"AT4G01510.1","percent_id":"61","alignment_length":"38","expect":"2e-09","bitscore":"52","rank":"1","query_pac":"30983430","subject_pac":"19647484"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G159291_P06","subject_id":"AT1G01020.1","percent_id":"53","alignment_length":"38","expect":"5e-08","bitscore":"48","rank":"2","query_pac":"30983430","subject_pac":"19655142"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G003715_P01","subject_id":"AT1G33060.2","percent_id":"50","alignment_length":"250","expect":"1e-64","bitscore":"225","rank":"1","query_pac":"31003639","subject_pac":"19657622"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G003715_P01","subject_id":"AT1G33060.1","percent_id":"50","alignment_length":"250","expect":"1e-64","bitscore":"225","rank":"2","query_pac":"31003639","subject_pac":"19657623"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G003715_P01","subject_id":"AT4G35580.3","percent_id":"63","alignment_length":"167","expect":"5e-63","bitscore":"218","rank":"3","query_pac":"31003639","subject_pac":"19645591"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P02","subject_id":"AT1G01020.1","percent_id":"45","alignment_length":"218","expect":"3e-58","bitscore":"184","rank":"1","query_pac":"31012670","subject_pac":"19655142"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P02","subject_id":"AT4G01510.1","percent_id":"43","alignment_length":"224","expect":"2e-55","bitscore":"177","rank":"2","query_pac":"31012670","subject_pac":"19647484"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P02","subject_id":"AT1G01020.2","percent_id":"43","alignment_length":"184","expect":"2e-39","bitscore":"134","rank":"3","query_pac":"31012670","subject_pac":"19655143"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P01","subject_id":"AT1G01020.2","percent_id":"58","alignment_length":"86","expect":"1e-32","bitscore":"112","rank":"1","query_pac":"31012671","subject_pac":"19655143"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P01","subject_id":"AT1G01020.1","percent_id":"58","alignment_length":"86","expect":"2e-32","bitscore":"113","rank":"2","query_pac":"31012671","subject_pac":"19655142"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G058496_P01","subject_id":"AT4G01510.1","percent_id":"53","alignment_length":"90","expect":"5e-27","bitscore":"99","rank":"3","query_pac":"31012671","subject_pac":"19647484"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G125777_P01","subject_id":"AT5G04410.1","percent_id":"70","alignment_length":"164","expect":"2e-80","bitscore":"266","rank":"1","query_pac":"31048430","subject_pac":"19671101"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G125777_P01","subject_id":"AT3G10500.1","percent_id":"70","alignment_length":"164","expect":"1e-78","bitscore":"260","rank":"2","query_pac":"31048430","subject_pac":"19659842"},{"query_org":"Zmays_284_5b+","subject_org":"Athaliana_167_TAIR10","query_id":"GRMZM2G125777_P01","subject_id":"AT3G10490.1","percent_id":"64","alignment_length":"165","expect":"7e-70","bitscore":"227","rank":"3","query_pac":"31048430","subject_pac":"19661859"}],"query_pac":["30976080","30976080","30976080","30983430","30983430","31003639","31003639","31003639","31012670","31012670","31012670","31012671","31012671","31012671","31048430","31048430","31048430"],"subject_pac":["19660138","19669075","19651681","19647484","19655142","19657622","19657623","19645591","19655142","19647484","19655143","19655143","19655142","19647484","19671101","19659842","19661859"]};
//var sanno = [{"query_org":"Zmays_284_5b+","query_pac":"31003639","locusName":"GRMZM2G003715","transcriptName":"GRMZM2G003715_T01","peptideName":"GRMZM2G003715_P01","Pfam":"PF02365","Panther":"PTHR31989,PTHR31989:SF21","KOG":"","KEGG\/EC":"","KO":"","GO":"GO:GO:0006355,GO:GO:0003677","Best-hit-arabi-name":"AT1G33060.2","arabi-symbol":"ANAC014,NAC014","arabi-defline":"NAC 014","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Zmays_284_5b+","query_pac":"31012671","locusName":"GRMZM2G058496","transcriptName":"GRMZM2G058496_T01","peptideName":"GRMZM2G058496_P01","Pfam":"PF04161","Panther":"PTHR14467","KOG":"","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":"AT1G01020.1","arabi-symbol":"ARV1","arabi-defline":"Arv1-like protein","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Zmays_284_5b+","query_pac":"31012670","locusName":"GRMZM2G058496","transcriptName":"GRMZM2G058496_T02","peptideName":"GRMZM2G058496_P02","Pfam":"PF04161","Panther":"PTHR14467","KOG":"KOG3134","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":"AT1G01020.1","arabi-symbol":"ARV1","arabi-defline":"Arv1-like protein","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Zmays_284_5b+","query_pac":"31048430","locusName":"GRMZM2G125777","transcriptName":"GRMZM2G125777_T01","peptideName":"GRMZM2G125777_P01","Pfam":"PF02365","Panther":"PTHR31989,PTHR31989:SF43","KOG":"","KEGG\/EC":"","KO":"","GO":"GO:GO:0006355,GO:GO:0003677","Best-hit-arabi-name":"AT5G04410.1","arabi-symbol":"anac078,NAC2","arabi-defline":"NAC domain containing protein 2","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Zmays_284_5b+","query_pac":"30983430","locusName":"GRMZM2G159291","transcriptName":"GRMZM2G159291_T06","peptideName":"GRMZM2G159291_P06","Pfam":"PF04161","Panther":"","KOG":"","KEGG\/EC":"","KO":"","GO":"","Best-hit-arabi-name":"AT4G01510.1","arabi-symbol":"ARV2","arabi-defline":"Arv1-like protein","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null},{"query_org":"Zmays_284_5b+","query_pac":"30976080","locusName":"GRMZM2G167492","transcriptName":"GRMZM2G167492_T01","peptideName":"GRMZM2G167492_P01","Pfam":"PF02365","Panther":"PTHR31989,PTHR31989:SF17","KOG":"","KEGG\/EC":"","KO":"","GO":"GO:GO:0006355,GO:GO:0003677","Best-hit-arabi-name":"AT5G17260.1","arabi-symbol":"anac086,NAC086","arabi-defline":"NAC domain containing protein 86","Best-hit-chlamy-name":null,"chlamy-symbol":null,"chlamy-defline":null}];

var qblast = JSON.parse($("#qblast").html());
var qanno = JSON.parse($("#qanno").html());
var sblast = JSON.parse($("#sblast").html());
var sanno = JSON.parse($("#sanno").html());

console.log(qblast)
console.log(qanno)
console.log(sblast)
console.log(sanno)

drawChart(qblast,sblast);
	//Draw the force network.
	function drawChart(qblast,sblast) {

		//Create data structure that stores common_annotations
		//for each pair of genes (even the ones that aren't linkedByIndex
		//together. Obviously there's probably a more efficient implementation.
		common_annotations = {};
		annotation_keys = Object.keys(qanno[0]);
		qanno.forEach(function(d) {
			annotation_pair = {};
			sanno.forEach(function(k) {
				annotation_list = {};
				annotation_keys.forEach(function(key) {
					if (d[key] == k[key]) {
						if (d[key] == null || d[key] == "") {} 
						else {annotation_list[key] = d[key];}
					}
				});
				annotation_pair[k["peptideName"]] = annotation_list;
			});
			common_annotations[d["peptideName"]] = annotation_pair;
		});

	
		//Genes can be represented twice in input.
		//We only want one node per gene, so we add
		//each gene to a set and make sure that new
		//genes aren't present in the set.
		var q_ids = new d3.set(); //query gene set
		var s_ids = new d3.set(); //subject gene set
		
		var graph = {};	
		graph["nodes"] = []; //stores both subject and query genes
		graph["links"] = []; //stores links between the genes
		
		//Maybe not a safe way to do this, but I'm using these variables
		//to index annotations.
		var q_number = 0;
		var s_number = 0;
		
		//Add a node/link to data variable for each gene in query blast.
		//Has to be hardcoded for now since there aren't labels designating
		//categorical variables vs. numerical variables vs. descriptors.
		qblast["blast"].forEach(function(d) {
			
			//create data type for new link
			new_link = {};
			new_link["source"] = d["query_id"];
			new_link["target"] = d["subject_id"];
			
			link_values = {};
			link_values["alignment_length"] = d["alignment_length"];
			link_values["bitscore"] = d["bitscore"];
			link_values["expect"] = d["expect"];
			link_values["percent_id"] = d["percent_id"];
			
			link_types = {};
			link_types["rank"] = d["rank"];
			link_types["rbh"] = false; //reciprocal best hit
			//check if link represents recip best hit
			//probably not the most efficient way to do this
			if (d["rank"] == 1) { // only need to check if it's a best hit already
				sblast["blast"].forEach(function(k) {
					if (k["subject_id"] == d["query_id"]) link_types["rbh"] = true;
				});
			}
			
			link_annotations = common_annotations[d["query_id"]][d["subject_id"]];
			
			new_link["link_values"] = link_values;
			new_link["link_types"] = link_types;
			new_link["link_annotations"] = link_annotations;
			graph["links"].push(new_link);
			
			if (d["rank"] == "1") { 
				//create data type for new node
				if (q_ids.has(d["query_id"])) {} //check that gene isn't in set
				else {
					q_ids.add("query_id"); //add gene to set
					
					new_node = {};
					
					node_types = {};
					node_types["query_subject"] = "query";
					
					node_values = {};
					
					node_descriptors = {};
					node_descriptors["Display_Name"] = d["query_id"];
					node_descriptors["Description"] = d["query_org"];
					
					node_annotations = qanno[q_number];
					q_number = q_number+1;
					
					new_node["Node_types"] = node_types;
					new_node["Node_values"] = node_values;
					new_node["Node_descriptors"] = node_descriptors;
					new_node["name"] = d["query_id"];
					new_node["annotations"] = node_annotations;
					graph["nodes"].push(new_node);
				}
			}
		});	
			
		
		//Add a node to data variable for each gene in query blast.
		//Has to be hardcoded for now since there aren't labels designating
		//categorical variables vs. numerical variables vs. descriptors.
		sblast["blast"].forEach(function(d) {
			
			
			if (d["rank"] == "1") {	
				//console.log(d);
				
				if (s_ids.has(d["query_id"])) {} //check that gene isn't in set
				else {
					s_ids.add("query_id"); //add gene to set	
					
					new_node = {};
					
					node_types = {};
					node_types["query_subject"] = "subject";
					
					node_values = {};
					
					node_descriptors = {};
					node_descriptors["Display_Name"] = d["query_id"];
					node_descriptors["Description"] = d["query_org"];
					
					node_annotations = sanno[s_number];
					s_number = s_number+1;
					
					new_node["Node_types"] = node_types;
					new_node["Node_values"] = node_values;
					new_node["Node_descriptors"] = node_descriptors;
					new_node["name"] = d["query_id"];
					new_node["annotations"] = node_annotations;
					graph["nodes"].push(new_node);
				}
			}
		});	
		
		
console.log(graph);
	
		var viewLinks = true;
		$("#linkToggle").click(function(){
			if (viewLinks) $("#linkToggle").html("View Links");
			else if (!viewLinks) $("#linkToggle").html("Hide Links");
			viewLinks = !viewLinks;
			updateCurData(link_intersection,node_intersection,"node");
			update();
		});
	
		var centers;
		$("#viewToggle").click(function(){
			if (layout == "force") {
				$("#viewToggle").html("Force View");
				centers = updateCenters(node_type_values,radialBy);				
				layout = "radial";
			}
			else if (layout == "radial") {
				$("#viewToggle").html("Radial View");
				layout = "force";
			}
			/* else if (layout == "n8") {
				$("#viewToggle").html("Radial View");
				layout = "force";
			} */
			update();
			//updateLinks();
		});
		
		
		function updateCenters(map,type) {
			var num_groups = map[type].size();
			var centers = {};
			var spacing = 360/num_groups;
			var radius = 200;
			var center_x = 500;
			var center_y = 500;
			var angle;
			var i = 0;
			map[type].forEach(function(value) {
				var center = {};
				angle = i*spacing;
				center.x = center_x + radius * Math.cos(angle * Math.PI / 180);
				center.y = center_y + radius * Math.sin(angle * Math.PI / 180);
				centers[value] = center;
				i++;
			});
			return centers;
		}

		
		var layout = "force";
		var link_distance = 30;
		var linkedByIndex = {};
		var HTMLabsoluteTip = d3.select("div.tooltip.absolute");

		
		function normalize(array) {
			var min = 0;
			var max = 0;
			var absolute_max;
			var w = $("#svg").width();
			var h = $("#svg").height();
			array.forEach(function(d) {
				if (d.Node_locations["D1"] > max) max = d.Node_locations["D1"];
				if (d.Node_locations["D1"] < min) min = d.Node_locations["D1"];
				if (d.Node_locations["D2"] > max) max = d.Node_locations["D2"];
				if (d.Node_locations["D2"] < min) min = d.Node_locations["D2"];			
			});
			if (Math.abs(min) > max && min != 0) absolute_max = Math.abs(min);
			else if (max != 0) absolute_max = max;
			array.forEach(function(d) {
				d.Node_locations["D1"] = d.Node_locations["D1"]/absolute_max*400+w/2;
				d.Node_locations["D2"] = d.Node_locations["D2"]/absolute_max*400+h/2;
			});
		}
		if (graph.nodes[0].Node_locations != undefined) normalize(graph.nodes);
		
		
		//Data/Title/Key Setup 
		
			//Keys for node attributes.
			var node_value_keys = d3.keys(graph.nodes[0].Node_values).sort();
			var node_type_keys = d3.keys(graph.nodes[0].Node_types).sort();
			
			//Keys for different link attributes.
			var link_value_keys = d3.keys(graph.links[0].link_values).sort();
			var link_type_keys = d3.keys(graph.links[0].link_types).sort();

			
			//The set of possible values that link_type can assume (categorical values).
			var link_type_values = {};
			link_type_keys.forEach(function(type) {
				var temp_set = d3.set();
				graph.links.forEach(function (element) {
					temp_set.add(element.link_types[type]);
				});
				link_type_values[type] = temp_set;
			});
			
			//The range of possible values that link_value can assume (numerical values).
			//Could be conducted on sorted array if too slow at start.
			var link_value_values = {};
			link_value_keys.forEach(function(type) {
				var min = parseFloat(graph.links[0].link_values[type]);
				var max = min;
				graph.links.forEach(function (element) {
					if (parseFloat(element.link_values[type]) > max) max = parseFloat(element.link_values[type]);
					if (parseFloat(element.link_values[type]) < min) min = parseFloat(element.link_values[type]);
				});
				link_value_values[type] = [Math.floor(min),Math.ceil(max)];
			});	
			
			//The set of possible values that node_type can assume (categorical values).
			var node_type_values = {};
			node_type_keys.forEach(function(type) {
				var temp_set = d3.set();
				graph.nodes.forEach(function (element) {
					temp_set.add(element.Node_types[type]);
				});
				node_type_values[type] = temp_set;
			});		
			
			//The range of possible values that node_value can assume (numerical values).
			//Could be conducted on sorted array if too slow at start.
			var node_value_values = {};
			node_value_keys.forEach(function(type) {
				var min = graph.nodes[0].Node_values[type];
				var max = min;
				graph.nodes.forEach(function (element) {
					if (element.Node_values[type] > max) max = element.Node_values[type];
					if (element.Node_values[type] < min) min = element.Node_values[type];
				});
				node_value_values[type] = [Math.floor(min),Math.ceil(max)];
			});			

		
		//Filtering Logic Setup
			
			var node_intersection = [], link_intersection = [];
			setupData = function(data) {
				var nodesMap;
				data.nodes.forEach(function(n,i) {
					var randomnumber;
					n.x = randomnumber = Math.floor(Math.random() * 800);
					n.y = randomnumber = Math.floor(Math.random() * 800);
					n.radius = 10;
					node_intersection.push(i);
				});
				nodesMap = mapNodes(data.nodes);
				data.links.forEach(function(l,i) {
					l.source = nodesMap.get(l.source);
					l.target = nodesMap.get(l.target);
					link_intersection.push(i);
					return linkedByIndex[l.source.name+","+l.target.name] = 1;
				});
				return data;
			}
			
			mapNodes = function(nodes) {
				var nodesMap = d3.map();
				nodes.forEach(function(n) {
					return nodesMap.set(n.name,n);
				});
				return nodesMap;
			};
			
			allData = setupData(graph);		


			var num_node_filters = node_value_keys.length;
			var num_link_filters = link_value_keys.length;
			
			var node_filters = new FilterSet(num_node_filters,graph.nodes.length);
			var link_filters = new FilterSet(num_link_filters,graph.links.length);
			
			var sorted_arrays = {};
			var link_indices = {};
			var index = [0,graph.links.length-1];
			var array = [];
			link_value_keys.forEach(function(k) {
				graph.links.forEach(function(d,i) {
					array.push([d.link_values[k],i]);
				});
				array.sort(function(a,b) {return a[0]-b[0];});
				sorted_arrays[k] = array;
				array = [];
				link_indices[k] = index;
			});
			var node_indices = {};
			index = [0,graph.nodes.length-1];
			node_value_keys.forEach(function(k) {
				graph.nodes.forEach(function(d,i) {
					array.push([d.Node_values[k],i]);
				});
				array.sort(function(a,b) {return a[0]-b[0];});
				sorted_arrays[k] = array;
				array = [];
				node_indices[k] = index;
			});			

			var active_node_filters, active_link_filters;			
	
		//Filter Setup
	
			//Create option to remove all link length filters.
			$("#LengthLinkFilters").append("<input class='Length' id='LengthNone' type='checkbox'>None</input>");
			$("#LengthLinkFilters").append("</br></br>");	
			
			//Make above option the default option.
			$("#LengthNone").prop('checked','checked');
			
			//Currently selected link length filter.
			var link_length_filter = "None";
			
			//Create and populate sliders for numerical link metadata.
			//Create length filters for each set of numerical link metadata.
			jQuery.each(link_value_keys, function(key) {
				//$("#LinkSliders").append("<div class='outer'><div class='inner'><p class='filterTitle'>"+link_value_keys[key]+"<p></div><div class='inner'><button class='showHist'>Show Histogram</button></div></div>");
				$("#LinkSliders").append("<p class='filterTitle'>"+link_value_keys[key]+"<p>");
				//$("#LinkSliders").append("<p><button class='showHist' id="+link_value_keys[key]+">Show Histogram</button></p>");
				$("#LinkSliders").append("<input type='text' class='amount' id=amount_"+link_value_keys[key]+" readonly style='border:0; color:#f6931f; font-weight:bold;'>");
				$("#LinkSliders").append("<div class='slider' data-class='link' id="+link_value_keys[key]+"></div>");
				$("#LinkSliders").append("<br></br>");
/* 				if (key == 0) {
					$("#"+link_value_keys[key]).slider({
						range: true,
						min: link_value_values[link_value_keys[key]][0],
						max: link_value_values[link_value_keys[key]][1],
						values: [ link_value_values[link_value_keys[key]][0], link_value_values[link_value_keys[key]][0] ],
						step: .01,
						slide: function( event, ui ) {
							$( "#amount_"+link_value_keys[key] ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
						}
					});				
				} */
				//else {
					$("#"+link_value_keys[key]).slider({
						range: true,
						min: link_value_values[link_value_keys[key]][0],
						max: link_value_values[link_value_keys[key]][1],
						values: [ link_value_values[link_value_keys[key]][0], link_value_values[link_value_keys[key]][1] ],
						step: .01,
						slide: function( event, ui ) {
							$( "#amount_"+link_value_keys[key] ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
						}
					});
				//}
				$( "#amount_"+link_value_keys[key] ).val( $( "#"+link_value_keys[key] ).slider( "values", 0 ) +
				" - " + $( "#"+link_value_keys[key] ).slider( "values", 1 ) );	

				link_filters.addFilter(link_value_values[link_value_keys[key]][0],link_value_values[link_value_keys[key]][1],sorted_arrays[link_value_keys[key]],link_value_keys[key]);
				
				$("#LengthLinkFilters").append("<input class='Length' id=Length"+this+" type='checkbox'>"+this+"</input>");
				$("#LengthLinkFilters").append("</br></br>");
			});
			
			
			
			//Create and populate filters for categorical link metadata.
			jQuery.each(link_type_keys, function(key) {
				if (link_type_keys[key] != "rbh") {
					$("#CatLinkFilters").append("<input id="+this+" type='checkbox' value='"+this+"' checked>"+this+"</input>");
					$("#CatLinkFilters").append("</br></br>");
					var temp = this;
					link_type_values[this].forEach(function(value) {
						$("#CatLinkFilters").append("<input id="+temp+value+" type='checkbox' class='option' value='"+value+"' checked>"+value+"</input>");
						$("#CatLinkFilters").append("</br></br>");
					});	
				}
			});
			
			
			//Create and populate filters for categorical node metadata.
			//Create color filters for each set of categorical node metadata.
			jQuery.each(node_type_keys, function(key) {
				$("#CatNodeFilters").append("<input id="+this+" class='filter' type='checkbox' value='"+this+"' checked>"+this+"</input>");
				$("#CatNodeFilters").append("</br></br>");
				var temp = this;
				node_type_values[this].forEach(function(value) {
					$("#CatNodeFilters").append("<input id="+temp+value+" type='checkbox' class='option' value='"+value+"' checked>"+value+"</input>");
					$("#CatNodeFilters").append("</br></br>");
				});	
				$("#ColorFilters").append("<input class='Color' id=Color"+this+" type='checkbox'>"+this+"</input>");
				$("#ColorFilters").append("</br></br>");
				//if (this != 'Description' && this != 'Display_Name') {
					$("#RadialOptions").append("<input class='RadialOption' id=Radial"+this+" type='checkbox'>"+this+"</input>");
					$("#RadialOptions").append("</br></br>");
				//}
			});
			
			//Create default node coloring option. 
			$("#Color"+node_type_keys[0]).prop('checked','checked');
			$("#Radial"+node_type_keys[0]).prop('checked','checked');
			
			//Currently selected coloring option.
			var colorBy = node_type_keys[0];
			var radialBy = node_type_keys[0];
			
			
			//Create and populate filters for numerical node metadata.
			jQuery.each(node_value_keys, function(key) {
				var step_size = 1;
				if (node_value_keys[key].indexOf('Float') != -1) step_size = .01;
				$("#NodeSliders").append("<p class='filterTitle'>"+node_value_keys[key]+"<p>");
				$("#NodeSliders").append("<input type='text' class='amount' id=amount_"+node_value_keys[key]+" readonly style='border:0; color:#f6931f; font-weight:bold;'>");
				$("#NodeSliders").append("<div class='slider' data-class='node' id="+node_value_keys[key]+"></div>");
				$("#NodeSliders").append("<br></br>");
				$("#"+node_value_keys[key]).slider({
					range: true,
					min: node_value_values[node_value_keys[key]][0],
					max: node_value_values[node_value_keys[key]][1],
					values: [ node_value_values[node_value_keys[key]][0], node_value_values[node_value_keys[key]][1] ],
					step: step_size,
					slide: function( event, ui ) {
						$( "#amount_"+node_value_keys[key] ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
					}
				});
				$( "#amount_"+node_value_keys[key] ).val( $( "#"+node_value_keys[key] ).slider( "values", 0 ) +
				" - " + $( "#"+node_value_keys[key] ).slider( "values", 1 ) );	

				node_filters.addFilter(node_value_values[node_value_keys[key]][0],node_value_values[node_value_keys[key]][1],sorted_arrays[node_value_keys[key]],node_value_keys[key]);
			});	
		
		
		
		//INTERACTION FUNCTIONS (PINNING,ZOOMING,BRUSHING)
			
			//PINNING
			
				//Variable to check whether or not dragging is currently
				//being implemented.
				var dragging = false;
						
				//Configure drag&pin behavior.
				var drag = d3.behavior.drag()
					.origin(function(d) { return d; }) //center of circle
					.on("dragstart", dragstarted)
					.on("drag", dragged)
					.on("dragend", dragended);

				//Stop force calculations and set dragging variable to true.	
				function dragstarted(d){ 
					d3.event.sourceEvent.stopPropagation();
					d3.select(this).classed("dragging", true);
					force.stop(); //stop ticks while dragging
					dragging = true;
				}

				//Update position of node and have tooltip follow it.
				function dragged(d){
					if (d.fixed) return; //root is fixed
					
					//get mouse coordinates relative to the visualization
					//coordinate system:
					var mouse = d3.mouse(plot_area.node());
					d.x = (mouse[0] - translation[0])/scaleFactor; 
					d.y = (mouse[1] - translation[1])/scaleFactor; 
					d.px = d.x;
					d.py = d.y;
					tick();//re-position this node and any links
					var matrix = this.getScreenCTM().translate(+this.getAttribute("cx"), +this.getAttribute("cy"));
					HTMLabsoluteTip
						.style('opacity', 1)
						.style('pointer-events', 'all')
						.style("left", (window.pageXOffset + matrix.e - 120) + "px")
						.style("top", (window.pageYOffset + matrix.f - 120) + "px");
				}

				//Fix position of node. Resume force calculations.
				function dragended(d){
					d3.select(this).classed("dragging", false);
					dragging = false;
					HTMLabsoluteTip
						.style('opacity', 0)
						/* .style('height', 25 +'px') */
						.style('pointer-events', 'none');
					d3.selectAll('.link').classed('highlighted', false);
					d3.selectAll('.node').classed('hidden',false);		
					d.fixed = true;	
					//d3.select(this).classed('pinned', true);
					force.resume();
				}

				//Unpin node.
				function releaseNode(d) {
					d.fixed = false;
					//d3.select(this).classed('pinned', false);
				}		
		
			
			//ZOOMING
				
				//Zoom parameters that other functions need to access.
				var scaleFactor = 1;
				var translation = [0,0];
				
				//Configure zoom behavior.
				var zoomer = d3.behavior.zoom()
					.on("zoom", zoom);

				//Zoom handler.
				function zoom() {
					scaleFactor = d3.event.scale;
					translation = d3.event.translate;
					tick(); //update positions
				}				
				
						
		//FILTERING FUNCTIONS
			
			
			//Listen for changes in sliders. Adjust included elements accordingly.
			$(".slider" ).on( "slide", function(event,ui ) {
				var slider_id = this.id;
				var type = this.dataset.class;
				min = ui.values[0];
				max = ui.values[1];
				if (type == 'link') {
					link_filters.filterCall(min,max,slider_id);
					link_intersection = link_filters.returnIntersection();
				}
				else if (type == 'node') {
					node_filters.filterCall(min,max,slider_id);
					node_intersection = node_filters.returnIntersection();
				}
				updateCurData(link_intersection,node_intersection,type);
				update();
			});			
			
			//Listen for changes in categorical link filtering.
			//Ajust filtering accordingly.
			$("#CatLinkFilters").change(function() {
				active_link_filters = {};
				link_type_keys.forEach(function(key) {
					if ($("#"+key).is(':checked')) {
						active_link_filters[key] = [];
						link_type_values[key].forEach(function(value) {
							if (!$("#"+key+value).is(':checked')) active_link_filters[key].push(value);
						});
					}
				});
				updateCurData(link_intersection,node_intersection,'link');
				update();
			});
			
			//Listen for changes in categorical node filtering.
			//Adjust filtering accordingly.
			$("#CatNodeFilters").change(function() {
				active_node_filters = {};
				node_type_keys.forEach(function(key) {
					if ($("#"+key).is(':checked')) {
						active_node_filters[key] = [];
						node_type_values[key].forEach(function(value) {
							if (!$("#"+key+value).is(':checked')) active_node_filters[key].push(value);
						});
					}
				});
				updateCurData(link_intersection,node_intersection,'node');
				update();
			});
			
			//Listen for changes in color selection.
			//Adjust color accordingly.
			$(".Color").change(function() {
				$(".Color").prop('checked',false);
				$("#"+this.id).prop('checked',true);
				colorBy = (this.id).substring('Color'.length);
				node.style('fill', function(d) {
					return color(d.Node_types[colorBy]);
				});
			});
			
			//Listen for changes in radial selection.
			//Adjust radial view accordingly.
			$(".RadialOption").change(function() {
				$(".RadialOption").prop('checked',false);
				$("#"+this.id).prop('checked',true);
				radialBy = (this.id).substring('Radial'.length);
				centers = updateCenters(node_type_values,radialBy);
				force.start();
			});
			
			var link_length_scale = d3.scale.linear()
				.range([0,1]);
			//Listen for changes in link length selection.
			//Ajust link length accordingly.
			$(".Length").change(function() {
				$(".Length").prop('checked',false);
				$("#"+this.id).prop('checked',true);
				link_length_filter = (this.id).substring('Length'.length);
				force.stop();
				force.linkDistance(function(d) {
					if (link_length_filter == "None") return .5*link_distance;
					else {
						var min = link_value_values[link_length_filter][0];
						var max = link_value_values[link_length_filter][1];
						link_length_scale.domain([min,max]);
						return link_distance*link_length_scale(d.link_values[link_length_filter]);
					} 
				});
				force.start();
			});
			
				
			//Update lists of active links and nodes after thresholds change.
			//Call function to update for plot.
			function updateCurData(link_intersect,node_intersect,type) {				
				if (type == "node") {
					curNodesData = filterNodes(node_intersect,allData.nodes);
					if (viewLinks) curLinksData = filterLinks(link_intersect,curNodesData,allData.links);
				}
				else if (type == "link" && viewLinks) {
					curLinksData = filterLinks(link_intersect,curNodesData,allData.links);
				}
				if (layout == "force") update();
				if (layout == "radial") {
					if (viewLinks) updateLinks();
					var numLinks = 0;
					var numNodes = 0;				
					curNodesData.forEach(function() {numNodes++});
					curLinksData.forEach(function() {numLinks++});
					$(".NumInfoTooltip").html("<p>Number of Nodes: "+numNodes+"</p><p>Number of Links: "+numLinks+"</p>");						
				}
				if (layout == "force") update();
				//updateRadii();				
			}

			//Return list of active nodes based upon intersection of all node filters.
			function filterNodes(intersection,allNodes) {
					filteredNodes = allNodes.filter(function(d,i) {
						return (intersection.indexOf(i)!=-1)
					});	
					var temp_keys = d3.keys(active_node_filters);
					temp_keys.forEach(function(key) {
						active_node_filters[key].forEach(function(type) {
							filteredNodes = filteredNodes.filter(function(d) {
								return d.Node_types[key] != type;
							}); 
						});
					});
				return filteredNodes;
			}
			
			//Return list of active links based upon intersection of all
			//link filters and currently active nodes.
			function filterLinks(link_intersect,curNodes,allLinks) {
				curNodes = mapNodes(curNodes);
					filteredLinks = allLinks.filter(function(d,i) {
						return (link_intersect.indexOf(i)!=-1) && (curNodes.get(d.source.name) && curNodes.get(d.target.name));
					});
				filteredLinks = filterCatLinks(filteredLinks);
				return filteredLinks;
			}	

			function filterCatLinks(filteredLinks) {
					var temp_keys = d3.keys(active_link_filters);
					temp_keys.forEach(function(key) {
						active_link_filters[key].forEach(function(type) {
							filteredLinks = filteredLinks.filter(function(d) {
								return d.link_types[key] != type;
							}); 
						});
					});
				return filteredLinks;
			}

			
		
		//UPDATING FUNCTIONS
			
			//Associate the new, filtered data with the force plot.
			//Call functions to update svg elements.
			function update() {
				/* if (layout === "radial") {
				  artists = sortedArtists(curNodesData, curLinksData);
				  updateCenters(artists);
				}  */				
				force.nodes(curNodesData);
				if (layout === "force" && viewLinks) {
					//curLinksData = [];
					force.links(curLinksData);
					updateLinks();
				} 
				else {
					//filterLinks(link_intersection,node_intersection,allData.links);
					force.links([]);
					if (link) {
						link.data([]).exit().remove();
						link = null;
					}
				}
				updateNodes();
				var numLinks = 0;
				var numNodes = 0;				
				curNodesData.forEach(function() {numNodes++});
				curLinksData.forEach(function() {numLinks++});
				$(".NumInfoTooltip").html("<p>Number of Nodes: "+numNodes+"</p><p>Number of Links: "+numLinks+"</p>");				
				return force.start();
			}
			
			//Set attributes for new nodes and remove svg circles that are
			//no longer associated with data.
			function updateNodes() {
				node = node.data(curNodesData);
				node.enter().append("circle")
					.attr("class","node")
/* 					.attr("class", function(d) {
						console.log(d.fixed);
						if (d.fixed == true) return "node pinned";
						else return "node";
					}) */
					.attr("cx", function(d) {return d.x})
					.attr("cy", function(d) {return d.y})
					.attr("r", function(d) {return d.radius})
					.attr("id", function(d) {return d.Node_types.Node_ID})
/* 					.style("stroke", function(d) {
						if (d.fixed) return "red";
						else return "white";
					}) */
					//.style("fill", function (d) {return color(d.Node_types[colorBy])})
					.on('mouseover',function(d) {
						if (dragging == false) {
							$('.LinkInfoTooltip').append('<p>Annotations</p>');
							annotation_keys.forEach(function(e) {
								if (d.annotations[e] == null || d.annotations[e] == "") {}
								else {$('.LinkInfoTooltip').append('<p style="margin-left:15px">'+e+': '+d.annotations[e]+'</p>');}
							});							
							var cur_index = d.index;
							d3.selectAll('.node').classed('hidden',true);
							d3.selectAll('.link').classed('highlighted', function(d) {
								if (d.source.index == cur_index || d.target.index == cur_index) {
									return true;
								}
								return false;
							})
							$('.absolute').html('<p>Gene: '+d.Node_descriptors.Display_Name+'</p><p>Organism: '+d.Node_descriptors.Description+'</p>');
							var matrix = this.getScreenCTM().translate(+this.getAttribute("cx"), +this.getAttribute("cy"));
							HTMLabsoluteTip
								.style('opacity', 1)
								.style('pointer-events', 'all')
								/* .style('height', 100+'px') */
								.style("left", (window.pageXOffset + matrix.e - 120) + "px")
								.style("top", (window.pageYOffset + matrix.f - 120) + "px");
						}
					})
					.on('mouseleave', function(d) {
						if (dragging == false) {
							HTMLabsoluteTip
							.style('opacity', 0)
							.style('pointer-events', 'none');
							d3.selectAll('.link').classed('highlighted', false);
							d3.selectAll('.node').classed('hidden',false);
							$('.LinkInfoTooltip').html('');
						}
					})
					.on('dblclick',releaseNode)
					.call(drag);
				node.style('fill', function(d) {
					return color(d.Node_types[colorBy]);
				});	
				return node.exit().remove();
			}

			//Set attributes for new links and remove svg lines that are
			//no longer assoicated with data.
			function updateLinks() {
				if (viewLinks) {
/* 					if (link == null) {
						console.log("hello");
						link = linksG.selectAll(".link").data(curLinksData, function(d) {
							console.log(d);
							return d.source.id + "_" + d.target.id;
						});			
					}
					else {link = link.data(curLinksData);} */
					link = linksG.selectAll(".link").data(curLinksData);
					link.enter().append("line")
						.attr("class", "link")
						//.attr("stroke", "#ddd")
						.attr("stroke-opacity", 0.8)
						.attr("x1", function(d) {return d.source.x})
						.attr("y1", function(d) {return d.source.y})
						.attr("x2", function(d) {return d.target.x})
						.attr("y2", function(d) {return d.target.y})
						.attr("stroke", function(d) {
							if (d["link_types"]["rbh"]) {
								return "red";
							}
							else if (d["link_types"]["rank"] == "1") {
								return "black"
							}
							else return "#999";
						})
						.on('mouseover',function(d) {
							this.setAttribute('class','link highlighted');
							$('.absolute').html('<p>'+'target: '+[d.target][0].name+'</p>'+'<p>'+'source: '+[d.source][0].name+'</p>');
					/* 		for (val in link_value_keys) {
								console.log(d)
								$('<p>'+link_value_keys[val]+': '+d.link_values[link_value_keys[val]]+'</p>').appendTo('.absolute');
							} */
							var matrix = this.getScreenCTM().translate(+d3.event.pageX, +d3.event.pageY);
							HTMLabsoluteTip
								.style('opacity', 1)
								.style('pointer-events', 'all')
								/* .style('height', 60+'px') */
								.style("left", (window.pageXOffset + matrix.e - 130) + "px")
								.style("top", (window.pageYOffset + matrix.f - 80) + "px");
							
							var link_annotation_keys = d3.keys(d.link_annotations);
							$('.LinkInfoTooltip').append('<p>Common Annotations</p>');
							link_annotation_keys.forEach(function(e) {
								$('.LinkInfoTooltip').append('<p style="margin-left:15px">'+e+': '+d.link_annotations[e]+'</p>');
							});
							var link_text_keys = d3.keys(d.link_values);
							$('.LinkInfoTooltip').append('<br>');
							$('.LinkInfoTooltip').append('<p>Hit Metrics</p>');
							link_text_keys.forEach(function(e) {
								$('.LinkInfoTooltip').append('<p style="margin-left:15px">'+e+': '+d.link_values[e]+'</p>');
							});								
						})
						.on('mouseleave', function(d) {
							if (dragging == false) {
								$('.LinkInfoTooltip').html('');
								this.setAttribute('class', 'link');
								HTMLabsoluteTip
								.style('opacity', 0)
								/* .style('height', 25 +'px') */
								.style('pointer-events', 'none');
							}
						})
						.on('click',function(d) {
						});
						link.attr("stroke", function(d) {
							if (d["link_types"]["rbh"]) {
								return "red";
							}
							else if (d["link_types"]["rank"] == "1") {
								return "black"
							}
							else return "#999";
						})
					//link.forEach(function(d) {console.log(d)});
					return link.exit().remove();
				}
			}
		


		
		//SVG CREATION AND FORCE CALCULATION
		
			//Constants for the svg.
			var width = $("#svg").width(),
				height = $("#svg").height();

			//Set up the colour scale.
			var color = d3.scale.category20();

			//Set up the force layout.
			var force = d3.layout.force()
				.charge(-120)
				.linkDistance(function(d) {
					if (link_length_filter == "None") return .5*link_distance;
					else return link_distance*d.link_values[link_length_filter]; 
				})
				.size([width, height]);

			//Append an svg to the html page with specified height and width.
			var svg = d3.select("#svg").append("svg")
				.attr("width", 100+'%')
				.attr("height", 100+'%');
			
			//Append a group to the svg that will contain the plotting group
			//and a rectangle where zooming and brushing is enabled.
			var plot = svg.append('g')
				.attr('class','plot')
				//.call(zoomer)
				.append('rect')
					.attr('class','lassoable')
					.attr('width',width)
					.attr('height',height)
					.style('fill', '#546372')
					.style('pointer-events','all');
			
			//Append a group to the parent group which will contain the
			//plotted elements.
			var plot_area = svg.append('g');
			
			//Append a group to the plotted elements group which will
			//contain the plotted links.
			var linksG = plot_area.append("g").attr("id", "links");
			var link = linksG.selectAll(".link");
			
			//Append a group to the plotted elements group which will
			//contain the plotted nodes. This group must come after
			//the links group because we want nodes to appear on top
			//of links.
			var nodesG = plot_area.append("g").attr("id", "nodes").attr("class", "lassoable");
			var node = nodesG.selectAll(".node");
			
			//Set up some of the data for later use.
			if (viewLinks == false) var curLinksData = [];
			else var curLinksData = allData.links;
			var curNodesData = allData.nodes;

			
		
			
			
			//Calculate force layout.
			force.on("tick", tick);			
			function tick(e) {
				if (e != undefined) {
					if (layout == "radial") {
						node.each(movetoRadial(e.alpha));
						updateLinks();				
					}
					if (layout == "n8") {
						//updateLinks();
						node.each(n8(e.alpha));
						updateLinks();
					}
				}
				if (e != undefined) node.each(n8(e.alpha));
				node.attr("cx", function (d) {return translation[0] + scaleFactor*d.x})
					.attr("cy", function (d) {return translation[1] + scaleFactor*d.y});
				if (viewLinks) {
					link.attr("x1", function (d) {return translation[0] + scaleFactor*d.source.x})
						.attr("y1", function (d) {return translation[1] + scaleFactor*d.source.y})
						.attr("x2", function (d) {return translation[0] + scaleFactor*d.target.x})
						.attr("y2", function (d) {return translation[1] + scaleFactor*d.target.y})
				}
			}	
			
			function movetoRadial(alpha) {
				return function (d) {
					var group = d.Node_types[radialBy];
					d.x = d.x + (centers[group].x - d.x) * alpha * .1;
					d.y = d.y + (centers[group].y - d.y) * alpha * .1;
				};
			}
			
			function n8(alpha) {
				return function (d) {
					if (d != undefined && graph.nodes[0].Node_locations != undefined) {
					d.x = d.x + 10 * alpha * ( ((d.Node_locations["D1"] - d.x) * beta));
					d.y = d.y + 10 * alpha * ( ((d.Node_locations["D2"] - d.y) * beta));
					//d.x = d.x + (((d.Node_locations["D1"]) * (1-beta)) + (d.Node_locations["D2"] * beta)) * alpha;
					//d.y = d.y + (((d.Node_locations["D2"]) * (1-beta)) + (d.Node_locations["D1"] * beta)) * alpha;
					//d.x = d.x;
					//d.y = d.y;
					//d.x = d.Node_locations["D1"];
					//d.y = d.Node_locations["D2"];
					}
					//else {console.log("undefined")};
				}
			}
				
  
		update();
		plot.call(zoomer);
	}
});