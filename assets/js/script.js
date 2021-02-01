
var apiKey = `4d2c3213cbd1a166176ccac96a5f601b`


function getForecast(cityInput){

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){

    var response = response

  
    console.log(response)

//loop through data for card

    })





}
function getWeather(cityInput){

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){

    var response = response
var lat = response.coord.lat
var long = response.coord.long
    console.log(response)

getUV(lat, long)
//loop through data for card

    })





}
function getUV(lat, long){

    var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${apiKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){

    var response = response

    
    console.log(response)

//loop through data for card

    })





}



//FUNC: search city prompt current and future conditions

$('#search').on("click", function (){

    var cityInput = $("#city-input").val()

    getForecast(cityInput)
    getWeather(cityInput)





//add call to search history (so set local storage)


})


//weather search
    //list city name , date , weather icon, conditions, temp and humidity


    //Uv index <> color change


//5 day weather forecast


//search history buttons 


//present with last search on reload