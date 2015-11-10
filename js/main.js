//following holds code for graph
google.load('visualization', '1', {packages: ['corechart', 'bar']});

google.setOnLoadCallback(drawChart);

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', 'Confidence Forming a Thesis', {role: 'style'}, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
          ['UP', 	2.684, 'color: #450074', createTooltip("University of Portland\n","Confidence forming a thesis: ", 2.684)],
          ['ASU', 	2.618, 'color: #003899', createTooltip("Angelo State University\n","Confidence forming a thesis: ", 2.618)],
          ['PLU', 	2.798, 'color: #FFBD28', createTooltip("Pacific Lutheran University\n","Confidence forming a thesis: ",2.798)],
          ['BCF', 	2.578, 'color: #973141', createTooltip("Baptist College of Florida\n","Confidence forming a thesis: ",2.578)],
        ]);
        
        var options = {
            //title: 'Average Confidence Levels Forming a Thesis by Institution',
            titlePosition: 'none',
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

// super hack-y way to do the
function createTooltip(universityName, variable, value) {
	return '<div style="padding:5px 5px 5px 5px; white-space: nowrap; font-size: 18px;">' +
	'<table>' + '<tr><b>' + universityName + '</b></tr>' + '<br>'
	+ '<tr>' + variable + '<b>' + value + '</b></tr>' + '</table></div>';
};