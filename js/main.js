//following holds code for graph
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', 'University of Portland', "Other Master's Level Universities"],
          ['Narrowing a Topic', 2.695, 3.03509],
          ['Scholarly Information', 2.93, 2.928],
          ['Authority of a Source', 2.66, 2.723],
          ['Ethics of Using Information', 2.95, 2.732]
        ]);

        var options = {
          chart: {
            title: 'Average Confidence Using Various Library Resources',
            subtitle: 'University of Portland vs. Other Masters Level Universities',
          },
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 400,
          colors: ['#7570b3', '#1b9e77']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

      }