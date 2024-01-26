const apikey = "52286682dfce1a435f20c257b8b240af";
const apiurl =
  "https:\\api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function chechweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  // document.querySelector(".vatavaran").value=${city};
  if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "images/snow.png";
  }
  document.querySelector(".mid").style.display="block";
  document.querySelector(".mid").style.transition="all 5s ease-out 5s";
}
searchbtn.addEventListener("click", () => {
  chechweather(searchbox.value);
  Object.style.transition = "block 10s"
});
searchbtn.addEventListener('keydown', (e) => {
      if (e.keydown==='Enter') {
         chechweather(searchbox.value);   
      }
  
});
