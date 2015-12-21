//following holds code for graph
 google.load('visualization', '1', {packages: ['corechart', 'bar']});

 google.setOnLoadCallback(drawChart);


var thesis = google.visualization.arrayToDataTable([
		['', 'Confidence in Writing a Thesis', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
		['UP', 	2.712, 'color: #450074', createTooltip("University of Portland\n","Confidence in Writing a Thesis: ", 2.712)],
		['ASU', 	2.621, 'color: #003899', createTooltip("Angelo State University\n","Confidence in Writing a Thesis: ", 2.621)],
		['PLU', 	2.802, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence in Writing a Thesis: ",2.802)],
		['SMC', 	3.381, 'color: #973141', createTooltip("Saint Mary's College of California\n","Confidence in Writing a Thesis: ", 3.381)],
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
var currentVal = 0; //holds which data table to display

 // data table columns: ShortName, VariableName, Color, ToolTip, Value
 function drawChart() {
	 newChart(currentVal); //initial draw, use thesis confidence level
 };

// data table columns: ShortName, VariableName, Color, ToolTip, Value
function newChart(val) {
	
	currentVal = val % allData.length;
	var newData = allData[currentVal]
	
	var options = {
	titlePosition: 'none',
	backgroundColor: '#E5E3DF',
	tooltip: {isHtml: true},
	legend: {position: 'none'},
	vAxis: {title: "Avg. Confidence Level", format: 'decimal', minValue: 0},
	hAxis: {title: "Master Level Universities"},
    animation: {
        startup: true,
        duration: 350,
    },
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
 	return '<div style="padding:15px 15px 15px 15px; font-size: 18px; border: 3px solid rgba(0, 0, 0, .3);">' +
 	'<table>' + '<tr><b>' + universityName + '</b></tr>' + '<br>'
 	+ '<tr>' + variable + '<b>' + value + '</b></tr>' + '</table></div>';
 };

//create trigger to resizeEnd event     
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

//redraw graph when window resize is completed  
$(window).on('resizeEnd', function() {
    newChart(currentVal);
});