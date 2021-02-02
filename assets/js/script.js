$(document).ready(function(){

var apiKey = `4d2c3213cbd1a166176ccac96a5f601b`


function getForecast(cityInput) {

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var response = response

        console.log(response)



    })





}

function getWeather(cityInput) {

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {

        var response = response

        var temp = (response.main.temp - 273.15) * 1.8 + 32

        $("#temperature").text("Temperature (F): " + temp.toFixed(2) + "°");
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#wind_speed").text("Wind Speed: " + response.wind.speed);
        $("#city-name").text(response.name)
        $("#weather-pict").attr("src", response.weather.icon)



        var lat = response.coord.lat
        var long = response.coord.lon
       
        console.log(lat)
        console.log(long)

        getUV(lat, long)



    })





}

function getUV(lat, long) {

    var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var response = response

        console.log(response)
        
        $("#uv_index").text("UV Index: " + response.current.uvi);
        $("#weather-pict").text(response.hourly.weather.icon)
        

    })





}



//FUNC: search city prompt current and future conditions

$('#search').on("click", function () {

    var cityInput = $("#city-input").val()

    getForecast(cityInput)

    getWeather(cityInput)



    //add call to search history (so set local storage)


})





//Uv index <> color change

 


//present with last search on reload
})