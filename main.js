
const humidity = document.querySelector(".humidity");
const temperature = document.querySelector(".temperature");
const light = document.querySelector(".light");
const ul = document.querySelector(".weather-stats .details ul");

var hum = 70;
var tem = 31;
var lig = 66;
document.getElementById("hum").innerHTML = hum;
document.getElementById("tem").innerHTML = tem;
document.getElementById("lig").innerHTML = lig;

new Chart(humidity  , {
  type: "doughnut",
  data: {
    labels: ['Red'],
    datasets: [{
      label: '# of Votes',
      data: [hum,100-hum],
      borderRadius: 10,
      borderWidth: 10
    }]
  },
  options: {
    events: [],
    borderWidth: 0,
    borderRadius: 0,
    hoverBorderWidth: 0,
    backgroundColor: ['#8FA0CE','#FFFF'],
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(temperature  , {
  type: "doughnut",
  data: {
    labels: ['Red'],
    datasets: [{
      label: '# of Votes',
      data: [tem,50-tem],
      borderRadius: 10,
      borderWidth: 10
    }]
  },
  options: {
    events: [],
    borderWidth: 0,
    borderRadius: 0,
    hoverBorderWidth: 0,
    backgroundColor: ['#CE8F8F','#FFFF'],
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(light  , {
  type: "doughnut",
  data: {
    labels: ['Red'],
    datasets: [{
      label: '# of Votes',
      data: [lig,100-lig],
      borderRadius: 10,
      borderWidth: 10
    }]
  },
  options: {
    events: [],
    borderWidth: 0,
    borderRadius: 0,
    hoverBorderWidth: 0,
    backgroundColor: ['#CDCE8F','#FFFF'],
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
