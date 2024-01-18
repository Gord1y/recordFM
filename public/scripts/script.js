document.addEventListener("DOMContentLoaded", function () {
	var playButton = document.getElementById("play_btn");
	var audio = null;

	playButton.addEventListener('click', function () {
			if (!audio) {
					audio = new Audio('https://nrf1.newradio.it:10058/stream');
			}

			if (audio && audio.paused) {
					audio.play().catch(e => console.error("Error playing audio:", e));
					playButton.innerHTML = '<img src="./public/images/btn_stop.svg" alt="">';
			} else if (audio) {
					audio.pause();
					audio = null; 
					playButton.innerHTML = '<img src="./public/images/btn_play.svg" alt="">';
			}
	});
});
