$( document ).ready(function() {
    $.ajax({
		url : myUrl,
		dataType : "jsonp",
		success : function(response) {
			loadWeather(response);			
		}
	});
});


var myUrl = "https://api.wunderground.com/api/861e5f15fcf64f06/forecast/q/NY/New_York.json" 

var loadWeather = function(response){
    
    var tempt1 = Number (response.forecast.simpleforecast.forecastday["0"].high.celsius);
	console.log(response); 
	console.log(tempt1);

	var tempt2 = Number (response.forecast.simpleforecast.forecastday["1"].high.celsius);

	var tempt3 = Number (response.forecast.simpleforecast.forecastday["2"].high.celsius);

    if (tempt1 > 25) {
		document.getElementById("today1").src = "icecream-05.png"
	} else if ((tempt1 <= 25) && (tempt1 > 19)) {
		document.getElementById("today1").src = "door-05.png"
	} else if (tempt1 <= 19) {
	  	document.getElementById("today1").src = "coffee-05.png"
	}

	if (tempt2 > 25) {
		document.getElementById("tomorrow1").src = "icecream-05.png"
	} else if ((tempt2 <= 25) && (tempt2 > 19)) {
		document.getElementById("tomorrow1").src = "door-05.png"
	} else if (tempt2 <= 19) {
	  	document.getElementById("tomorrow1").src = "coffee-05.png"
	}

	if (tempt3 > 25) {
		document.getElementById("thirdday1").src = "icecream-05.png"
	} else if ((tempt3 <= 25) && (tempt3 > 19)) {
		document.getElementById("thirdday1").src = "door-05.png"
	} else if (tempt3 <= 19) {
	  	document.getElementById("thirdday1").src = "coffee-05.png"
	}

}




