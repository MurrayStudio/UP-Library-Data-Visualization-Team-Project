//following holds code for graph
google.load('visualization', '1', {packages: ['corechart', 'bar']});

google.setOnLoadCallback(drawChart);

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', 'Confidence Forming a Thesis', {role: 'style'}, {role: 'tooltip'}],
          ['UP', 	2.684, 'color: #450074', "University of Portland\nConfidence forming a thesis: 2.684"],
          ['ASU', 	2.618, 'color: #003899', "Angelo State University\nConfidence forming a thesis: 2.684"],
          ['PLU', 	2.798, 'color: #FFBD28', "Pacific Lutheran University\nConfidence forming a thesis: 2.684"],
          ['BCF', 	2.578, 'color: #973141', "Baptist College of Florida\nConfidence forming a thesis: 2.684"],
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