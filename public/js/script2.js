var interval = null;
var slideSource = document.getElementById('slideSource');
    var randomValue = null;
    var choices = [
	"ATMADJA , SARA MERCIA M",
"INA RIANA",
"SUSILAWATI",
"SUWONO",
"RERE"
];
    function startRandomly() {
        interval = setInterval(function () {
            randomValue = getRandomInt(0, choices.length - 1);
            document.getElementById("random").innerHTML = choices[randomValue];
        }, 1);
    }

    function stopRandomly() {
        clearInterval(interval);
		
        if (choices.length && randomValue >= 0) {
            document.getElementById("slideSource").innerHTML = choices[randomValue];
        }
		
		var video = document.getElementById('player');
		
        video.play();
		
		choices.splice(randomValue, 1);
		
		slideSource.classList.toggle('fade');

	
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
	
	
	
	
	
	
	