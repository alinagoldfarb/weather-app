function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let weekDay = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[weekDay];
  
    return `${day} ${hours}:${minutes}`;
  }

  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  // getting real weather data
  
  function displayWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
    document.querySelector("#humidity").innerHTML = Math.round(
      response.data.main.humidity
    );
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
  }
  
  function search(event) {
    event.preventDefault();
    let apiKey = "352c98556c2b45636a510f23f982cbcb";
    let city = document.querySelector("#searchInput").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  