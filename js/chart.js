//WEEKLY CHART
//

var hourlyChart = document.getElementById("lineChart-hourly");
var weeklyChart = document.getElementById("lineChart-weekly");
var dailyChart = document.getElementById("lineChart-daily");
var monthlyChart = document.getElementById("lineChart-monthly");
var hourlyClick = document.getElementById("hourlyClick");
var weeklyClick = document.getElementById("weeklyClick");
var dailyClick = document.getElementById("dailyClick");
var monthlyClick = document.getElementById("monthlyClick");

window.onload = function() {

      weeklyChart.style.display = 'none';
      dailyChart.style.display = 'none';
      monthlyChart.style.display = 'none';

  };

  hourlyClick.addEventListener("click", function(e){
    hourlyChart.style.display = 'block';
    weeklyChart.style.display = 'none';
    dailyChart.style.display = 'none';
    monthlyChart.style.display = 'none';
  });

  weeklyClick.addEventListener("click", function(e){
    hourlyChart.style.display = 'none';
    weeklyChart.style.display = 'block';
    dailyChart.style.display = 'none';
    monthlyChart.style.display = 'none';
  });

  dailyClick.addEventListener("click", function(e){
    hourlyChart.style.display = 'none';
    weeklyChart.style.display = 'none';
    dailyChart.style.display = 'block';
    monthlyChart.style.display = 'none';
  });

  monthlyClick.addEventListener("click", function(e){
    hourlyChart.style.display = 'none';
    weeklyChart.style.display = 'none';
    dailyChart.style.display = 'none';
    monthlyChart.style.display = 'block';
  });


var myChart = new Chart(hourlyChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "18-24", "25-31", "33-35"],
        datasets: [
          {
            label: 'Hourly',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderColor: "#6E75DA",
            pointBorderColor: '#545475',
            pointBackgroundColor: '#F6F7FF',
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
        } ]
    },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var myChart = new Chart(weeklyChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "18-24", "25-31", "33-35"],
        datasets: [
        {
          label: 'Weekly',
          lineTension: 0.2,
          backgroundColor: 'rgba(247, 192, 27, 0.6)',
          borderCapStyle: 'square',
          borderColor: 'rgba(247, 192, 27, 1)',
          pointBorderColor: 'rgba(247, 192, 27, 1)',
          pointBackgroundColor: 'rgba(247, 192, 27, 0.2)',
          pointBorderWidth: 1,
          pointRadius: 4,
          pointHoverRadius: 6,
          data: [0, 850, 1050, 1000, 1700, 2200, 1200, 1650, 1350, 1250, 2450, 1450, 2050]
      }]
    },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myChart = new Chart(dailyChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "18-24", "25-31", "33-35"],
        datasets: [
          {
            label: 'Daily',
            lineTension: 0.2,
            backgroundColor: "rgba(209, 33, 197, 0.5)",
            borderCapStyle: 'square',
            borderColor: "#6E75DA",
            pointBorderColor: '#545475',
            pointBackgroundColor: '#F6F7FF',
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
            data: [0, 650, 1150, 1400, 1300, 2500, 1000, 1550, 1450, 1350, 2150, 1950, 2450]
        }]
      },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



var myChart = new Chart(monthlyChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "18-24", "25-31", "33-35"],
        datasets: [
      {
      label: 'Monthly',
      lineTension: 0.2,
      backgroundColor: 'rgba(88, 122, 206, 0.5)',
      borderCapStyle: 'square',
      borderColor: "#6E75DA",
      pointBorderColor: '#545475',
      pointBackgroundColor: '#F6F7FF',
      pointBorderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 6,
      data: [0, 350, 950, 1400, 1400, 1900, 1300, 1850, 1150, 1550, 2250, 1150, 2250]
  }]
    },
    options: {
        legend: true,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});









var barChart = document.getElementById("barChartDaily");
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
          {
            label: 'Daily Traffic',
            backgroundColor: "rgb(96, 96, 205)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Nighttime Traffic',
          backgroundColor:  "rgb(247, 192, 27)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(247, 192, 27,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [35, 29, 30, 41, 26, 35, 20],

        },
        {
          label: 'Afternoon Traffic',
          backgroundColor:  "rgb(209, 33, 197)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [75, 69, 90, 94, 78, 84, 62],

        }

        ],
  },

    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var donutChart = document.getElementById("mobileUsers");
var myDoughnutChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
        labels: [
          "iPhone",
          "Tablets",
          "Android",
          "Blackberry"],
        datasets: [{
            backgroundColor: [
              "rgb(96, 96, 205)",
               "rgb(209, 33, 197)",
               "rgb(247, 192, 27)",
               "rgb(209, 156, 112)"
             ],
            borderColor: "rgb(164, 35, 239)",
            borderWidth: 1,
            hoverBackgroundColor: [
              "rgba(96, 96, 205, 0.5)",
               "rgba(209, 33, 197, 0.5)",
               "rgba(247, 192, 27, 0.5)",
               "rgba(209, 156, 112, 0.5)"
            ],
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [40, 40, 10, 10],
        }]
    }

});
