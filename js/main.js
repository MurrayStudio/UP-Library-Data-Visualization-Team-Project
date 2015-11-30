 /* google.load('visualization', '1', {
     packages: ['corechart', 'bar']
 });

 google.setOnLoadCallback(initChart);

 // Define the variables to hold the entire fusion table,
 // and a collection of views, one for each year.
 var data;
 var views = {};

 var options = {
     titlePosition: 'none',
     backgroundColor: '#E5E3DF',
     tooltip: {
         isHtml: true
     },
     legend: {
         position: 'none'
     },
     vAxis: {
         title: "Avg. Confidence Level",
         format: 'decimal',
         minValue: 0
     },
     hAxis: {
         title: "Master Level Universities"
     },
     colors: ['#A2C180','#3D7930','#FFC6A5','#FFFF42','#DEF3BD','#00A5C6','#DEBDDE','#000000'], //best we can do to change color
     height: 500
 };

 function drawVisualization() {
     var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

     //var query = "SELECT ShortName, Thesis, Scholarly, Authority, Ethics FROM 1BslkTKgWIr0jwxR8odybI2fvvLSKnfSE8MylFzDi";
     var query = "SELECT ShortName, Thesis FROM 1BslkTKgWIr0jwxR8odybI2fvvLSKnfSE8MylFzDi";
     var queryText = encodeURIComponent(query);
     var opts = {
         sendMethod: 'auto'
     };
     var gvizQuery = new google.visualization.Query(
         'http://www.google.com/fusiontables/gvizdata?tq=', opts);

     gvizQuery.setQuery(query);


     gvizQuery.send(function (e) {

         data = e.getDataTable();
         data = new google.visualization.DataView(data);


         console.log(data);

         //views[thisYear] = new google.visualization.DataView(data);

         // Draw the chart for the initial academic year.
         chart.draw(data, options);
     });
 }*/

/* //following holds code for graph
 google.load('visualization', '1', {packages: ['corechart', 'bar']});

 google.setOnLoadCallback(drawChart);*/

 /*// Define the variables to hold the entire fusion table,
 // and a collection of views, one for each year.
 var data;
 var views = {};
 var chart1;

 var options = {
 titlePosition: 'none',
 backgroundColor: '#E5E3DF',
 tooltip: {isHtml: true},
 legend: {position: 'none'},
 vAxis: {title: "Avg. Confidence Level", format: 'decimal', minValue: 0},
 hAxis: {title: "Master Level Universities"},
 height: 500
 };


 function initChart() {
 	// Function called on page load. Queries GoogleFusionTable, pulls data.
 	// Create a new viz object using the google API
	chart1 = new google.visualization.ColumnChart(document.getElementById('chart_div'));
 	
 	// Make the initial query to get the whole Fusion table (called only once for efficiency).
 	var query = "SELECT Institution, ShortName, Thesis, Scholarly, Authority, Ethics FROM 1BslkTKgWIr0jwxR8odybI2fvvLSKnfSE8MylFzDi";
 	
 	var opts = {sendMethod: 'auto'};
 	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
 	
 	
 	// Send the query and handle the response by logging the data
 	// to the console.
 	queryObj.setQuery(query);
 	queryObj.send(function(e) {
 				  
 				  data = e.getDataTable();
 				  console.log(data); // *** for testing
 				  
 //				  // First, get the textualized range of the year.
 //				  var thisYear = "" + year[0] + "-" + year[1];
 				  
 				  var currVar = "Thesis"
 				  
 				  // Now, create the object
 				  views[currVar] = new google.visualization.DataView(data);
 				  
 				  // Find which column number "Thesis" corresponds to.
 				  var rowIndex = 2
 				  
 				  // For now, just set it to the first three columns
 				  views[currVar].setColumns([0,1, rowIndex]);
 				  
 //				  // Next, create the object and get the rows
 //				  // corresponding to "thisYear".
 //				  views[thisYear] = new google.visualization.DataView(data);
 //				  
 //				  views[thisYear].setRows(views[thisYear].getFilteredRows([{column: 2, value: thisYear}]));
 //				  
 //				  // Get a subset of the columns.
 //				  views[thisYear].setColumns([0, 3]);
 //				  
 //				  // Draw the chart for the initial academic year.
 				  chart1.draw(views[currVar].toDataTable(), google.charts.Bar.convertOptions(options));
 				  
 				  });
 	
 	// SHOW THE DATA
 	// Draw the chart with the supplied options.
 	// chart.draw(data, options);
 	
 };*/



//following holds code for graph
 google.load('visualization', '1', {packages: ['corechart', 'bar']});

 google.setOnLoadCallback(drawChart);


var thesis = google.visualization.arrayToDataTable([
		['', 'Confidence Forming a Thesis', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
		['UP', 	2.712, 'color: #450074', createTooltip("University of Portland\n","Confidence forming a thesis: ", 2.712)],
		['ASU', 	2.621, 'color: #003899', createTooltip("Angelo State University\n","Confidence forming a thesis: ", 2.621)],
		['PLU', 	2.802, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence forming a thesis: ",2.802)],
		['SMC', 	3.381, 'color: #973141', createTooltip("Saint Mary's College of California\n","Confidence forming a thesis: ", 3.381)],
									   ]);
var scholarly = google.visualization.arrayToDataTable([
		['', 'Confidence in Using Scholarly Information', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
		['UP', 	2.930, 'color: #450074', createTooltip("University of Portland\n","Confidence in Using Scholarly Information: ", 2.930)],
		['ASU', 	2.898, 'color: #003899', createTooltip("Angelo State University\n","Confidence in Using Scholarly Information: ", 2.898)],
		['PLU', 	2.962, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence in Using Scholarly Information: ",2.962)],
		['SMC', 	3.142, 'color: #973141', createTooltip("Saint Mary's College of California\n","Confidence in Using Scholarly Information: ",3.142)],
													]);

var authority = google.visualization.arrayToDataTable([
		['', 'Confidence in Evaluating the Authority of a Source', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
		['UP', 	2.930, 'color: #450074', createTooltip("University of Portland\n","Confidence in Evaluating the Authority of a Source: ", 2.930)],
		['ASU', 	2.653, 'color: #003899', createTooltip("Angelo State University\n","Confidence in Evaluating the Authority of a Source: ", 2.653)],
		['PLU', 	2.879, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence in Evaluating the Authority of a Source: ",2.879)],
		['SMC', 	2.857, 'color: #973141', createTooltip("Saint Mary's College of California\n","Confidence in Evaluating the Authority of a Source: ",2.857)],
													]);

var ethics = google.visualization.arrayToDataTable([
		['', 'Confidence Understanding the Ethics of Using Information', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
		['UP', 	2.951, 'color: #450074', createTooltip("University of Portland\n","Confidence Understanding the Ethics of Using Information: ", 2.951)],
		['ASU', 	3.023, 'color: #003899', createTooltip("Angelo State University\n","Confidence Understanding the Ethics of Using Information: ", 3.023)],
		['PLU', 	3.006, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence Understanding the Ethics of Using Information: ",3.006)],
		['SMC', 	3.476, 'color: #973141', createTooltip("Saint Mary's College of California\n","Confidence Understanding the Ethics of Using Information: ",3.476)],
													]);


var allData = [thesis, scholarly, authority, ethics]; //put data tables in array

 // data table columns: ShortName, VariableName, Color, ToolTip, Value
 function drawChart() {
	 newChart(0); //initial draw, use thesis confidence level
 };

// data table columns: ShortName, VariableName, Color, ToolTip, Value
function newChart(val) {
	
	val = val % allData.length;
	var newData = allData[val]
	
	var options = {
	titlePosition: 'none',
	backgroundColor: '#E5E3DF',
	tooltip: {isHtml: true},
	legend: {position: 'none'},
	vAxis: {title: "Avg. Confidence Level", format: 'decimal', minValue: 0},
	hAxis: {title: "Master Level Universities"},
	height: 500
	};
	
	var chart = new google.visualization.ColumnChart(
		document.getElementById('chart_div'));
	
	chart.draw(newData, google.charts.Bar.convertOptions(options));
};

 // super hack-y way to do the tooltips
 // This function returns a div in the following format:
 // <bold> Univerisity Name </bold>
 // Variable name: <bold> value </bold>
 function createTooltip(universityName, variable, value) {
 	return '<div style="padding:5px 5px 5px 5px; white-space: nowrap; font-size: 18px;">' +
 	'<table>' + '<tr><b>' + universityName + '</b></tr>' + '<br>'
 	+ '<tr>' + variable + '<b>' + value + '</b></tr>' + '</table></div>';
 };