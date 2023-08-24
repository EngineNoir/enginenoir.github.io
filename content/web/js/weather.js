const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.374&longitude=4.89&hourly=temperature_2m';

// Get the current date and time
let currentDate = new Date();

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const timeVector = data.hourly.time;
    const tempVector = data.hourly.temperature_2m;
    
    let ind = getDateIndex(currentDate, timeVector);
    console.log(ind)
    console.log(data.hourly.time[ind])
  
    tempValue = data.hourly.temperature_2m[ind]
    console.log(tempValue)
    const tempInfo = `${tempValue}°C. - Amsterdam`;

    document.getElementById("temp-info").innerHTML = tempInfo;
  })
  .catch((error) => {
    console.error("Error fetching temperature data:", error);
    document.getElementById("temp-info").innerHTML = "Could not fetch weather<br>information";
  });

function getDateIndex(currDate, inputDateVector) {
  
  let currentHour = currDate.getHours();
  let currentMonth = currDate.getMonth() + 1;
  let currentDay = currDate.getDate();

  console.log("Current day: " + currentDay);
  console.log("Current month: " + currentMonth);
  console.log("Current hour: " + currentHour);
  
  index = isNaN();

  for (i = 0; i < inputDateVector.length; i++) {
    let month = parseInt(inputDateVector[i].slice(5, 7));
    let day = parseInt(inputDateVector[i].slice(8, 10));
    let hour = parseInt(inputDateVector[i].slice(11, 13))

    if (currentHour == hour && currentMonth == month && currentDay == day) {
      index = i;
      break;
    } else {
      index = -1;
    } 
  }
  
  return index;
}
