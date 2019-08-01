var demoResultChart = function(noisedData) {

  console.log(noisedData);
  var dataArray = new Array();
  var labelArray = new Array();

  var len = noisedData.length;
  var firstTime = noisedData[0].hour;
  var lastTime = noisedData[len-1].hour;

  var idx = 0;
  for(var h=12; h<firstTime; h++) {
    dataArray[idx] = 0;
    labelArray[idx] = h;
    idx++;
  }

  for(var i=0; i<len; i++) {
    dataArray[idx] = noisedData[i].avg_noisedData;
    labelArray[idx] = noisedData[i].hour;
    idx++;
  }

  for(var h=21; i>lastTime; h--) {
    dataArray[idx] = 0;
    labelArray[idx] = h;
    idx++;
  }

  $('#demoChart').remove();
  $('#chart-container').append('<canvas id="demoChart"></canvas>');
  var ctx = document.getElementById('demoChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
          labels: labelArray,
          datasets: [{
              label: "noisedData",
              display: "false",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: dataArray,
          }]
      },

      // Configuration options go here
      options: {
		legend: {
		        display: false
		    },
		    tooltips: {
		        callbacks: {
		           label: function(tooltipItem) {
		                  return tooltipItem.yLabel;
		           }
		        }
    	},
        scales: {
          yAxes: [{
            scaleLabel: {
			        display: true,
			        labelString: "Heart Rate",
			        fontColor: "black",
			        fontSize: 18
      	    },
      	    ticks: {
			        min: 40,
			        max: 140,
			        stepSize: 20
            }
          }],
          xAxes: [{
		    scaleLabel: {
		  	        display: true,
		  	        labelString: "Time",
		  	        fontColor: "black",
		  	        fontSize: 18
		    }
          }]
        }
      }
  });

}
