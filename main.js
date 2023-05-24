
const humidity = document.querySelector(".humidity");
const temperature = document.querySelector(".temperature");
const light = document.querySelector(".light");
const ul = document.querySelector(".weather-stats .details ul");

// var hum = 70;
// var tem = 31;
// var lig = 66;
// document.getElementById("hum").innerHTML = hum;
// document.getElementById("tem").innerHTML = tem;
// document.getElementById("lig").innerHTML = lig;




const getData = async () => {
  const options = {
      method: "GET",
      // credentials: "include",
  };
  await fetch(`http://127.0.0.1:3000/data`,options)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("lig").innerHTML = parseInt(data.dataTable.light/50);
        document.getElementById("tem").innerHTML = parseInt(data.dataTable.temp);
        document.getElementById("hum").innerHTML = parseInt(data.dataTable.humidity);
        var lig = data.dataTable.light/50;
        var tem = data.dataTable.temp;
        var hum = data.dataTable.humidity;
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
              data: [lig,3000-lig],
              borderRadius: 10,
              borderWidth: 10
            }]
          },
          options: {
            events: [],
            // borderWidth: 0,
            // borderRadius: 0,
            // hoverBorderWidth: 0,
            backgroundColor: ['#CDCE8F','#FFFF'],
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });

        document.getElementById("imgid").src="images/sun.png";
      })
      .catch((error) => console.error(error));
};

// document.getElementById(
//   "eng-name-info"
// ).innerHTML = `${data.user.firstname_en} ${data.user.lastname_en}`;