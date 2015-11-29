//following holds code for graph
google.load('visualization', '1', {packages: ['corechart', 'bar']});

google.setOnLoadCallback(drawChart);

initChart();

var chart1;

function initChart() {
	// Function called on page load. Queries GoogleFusionTable, pulls data.
	// Create a new viz object using the google API
	// chart1 = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	
	// Make the initial query to get the whole Fusion table (called only once for efficiency).
	var query = "SELECT Institution, Thesis, Scholarly, Authority, Ethics FROM 1BslkTKgWIr0jwxR8odybI2fvvLSKnfSE8MylFzDi";
	
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
//				  
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
//				  chart.draw(views[thisYear].toDataTable(), options);
				  
				  });
	
	// SHOW THE DATA
	// Draw the chart with the supplied options.
	// chart.draw(data, options);
	
};

// data table columns: ShortName, VariableName, Color, ToolTip, Value
function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', 'Confidence Forming a Thesis', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
          ['UP', 	2.684, 'color: #450074', createTooltip("University of Portland\n","Confidence forming a thesis: ", 2.684)],
          ['ASU', 	2.618, 'color: #003899', createTooltip("Angelo State University\n","Confidence forming a thesis: ", 2.618)],
          ['PLU', 	2.798, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence forming a thesis: ",2.798)],
          ['BCF', 	2.578, 'color: #973141', createTooltip("Baptist College of Florida\n","Confidence forming a thesis: ",2.578)],
        ]);
        
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

        chart.draw(data, google.charts.Bar.convertOptions(options));
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