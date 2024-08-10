//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=0fde24f18909b27ce870124bbcdf96d5

async function weather() {
  let city = document.querySelector("#search>input").value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
    city +
    "&appid=0fde24f18909b27ce870124bbcdf96d5";

  const res = await fetch(url);
  const data = await res.json();

  temp.innerHTML = Math.round(data.main.temp) + "℃";
  cityname.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";
}
