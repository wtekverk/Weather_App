$(document).ready(function () {

    var apiKey = `4d2c3213cbd1a166176ccac96a5f601b`


    function getForecast(lat, long) {

        var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            
            var response = response
            console.log(response)

            var today = new Date();
            var dayOfMonth = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            today = "(" + month + "/" + dayOfMonth + "/" + year + ")"
            var day1 = month + "/" + (dayOfMonth + 1)
            var day2 = month + "/" + (dayOfMonth + 2)
            var day3 = month + "/" + (dayOfMonth + 3)
            var day4 = month + "/" + (dayOfMonth + 4)
            var day5 = month + "/" + (dayOfMonth + 5)


            // day one commands 
            $("#date1").text("Date: " + day1);
            var iconCode1 = response.daily[0].weather[0].icon;
            var iconURL1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
            $('#icon1').attr('src', iconURL1);
            $("#temp1").text("Temp: " + parseFloat(((response.daily[0].temp.day) - 273.15) * (9 / 5) + 32).toFixed(2) + "°F");
            $("#hum1").text("Humidity: " + response.current.humidity + "%");
            
            // day two commands 
            $("#date2").text("Date: " + day2);
            var iconCode2 = response.daily[1].weather[0].icon;
            var iconURL2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
            $('#icon2').attr('src', iconURL2);
            $("#temp2").text("Temp: " + parseFloat(((response.daily[1].temp.day) - 273.15) * (9 / 5) + 32).toFixed(0) + "°F");
            $("#hum2").text("Humidity: " + response.current.humidity + "%");

            // day three commands 
            $("#date3").text("Date: " + day3);
            var iconCode3 = response.daily[2].weather[0].icon;
            var iconURL3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png";
            $('#icon3').attr('src', iconURL3);
            $("#temp3").text("Temp: " + parseFloat(((response.daily[2].temp.day) - 273.15) * (9 / 5) + 32).toFixed(0) + "°F");
            $("#hum3").text("Humidity: " + response.current.humidity + "%");

            // day four commands 
            $("#date4").text("Date: " + day4);
            var iconCode4 = response.daily[3].weather[0].icon;
            var iconURL4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png";
            $('#icon4').attr('src', iconURL4);
            $("#temp4").text("Temp: " + parseFloat(((response.daily[3].temp.day) - 273.15) * (9 / 5) + 32).toFixed(0) + "°F");
            $("#hum4").text("Humidity: " + response.current.humidity + "%");

            // day five commands 
            $("#date5").text("Date: " + day5);
            var iconCode5 = response.daily[4].weather[0].icon;
            var iconURL5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png";
            $('#icon5').attr('src', iconURL5);
            $("#temp5").text("Temp: " + parseFloat(((response.daily[4].temp.day) - 273.15) * (9 / 5) + 32).toFixed(0) + "°F");
            $("#hum5").text("Humidity: " + response.current.humidity + "%");




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

                console.log(response)

                var temp = (response.main.temp - 273.15) * 1.8 + 32

                $("#temperature").text("Temperature (F): " + temp.toFixed(2) + "°");
                $("#humidity").text("Humidity: " + response.main.humidity);
                $("#wind_speed").text("Wind Speed: " + response.wind.speed);
                $("#city-name").text(response.name)
                $("#weather-pict").attr("src", response.weather.icon)

                var iconCode = response.weather[0].icon;
                var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $('#weather-pict').attr('src', iconURL);


                var lat = response.coord.lat
                var long = response.coord.lon

                getUV(lat, long)

                getForecast(lat, long)

            })





    }

    function getUV(lat, long) {

        var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var response = response



            $("#uv_index").text("UV Index: " + response.current.uvi);



        })





    }

    $('#search').on("click", function () {

        var cityInput = $("#city-input").val()



        getWeather(cityInput)


        localStorage.setItem("count", cityInput)

        $("history-btns").prepend("<button>" + cityInput)



    })






})