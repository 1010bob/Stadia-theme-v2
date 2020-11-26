window.addEventListener("load", () => {
	let main = document.querySelector(".wvCs4c.ltdNmc");
	let searchbutton = document.querySelector(".g3joHc");
	let downarrow = document.createElement("span");
	let credits = document.createElement("span");
	downarrow.id = "downarrow";
	credits.id = "credits";
	downarrow.innerHTML = "<div class='arrow'><span></span><span></span><span></span></div>";
	credits.innerHTML = "<center style='padding-bottom: 1%;'>Theme created with <a href='https://video.twimg.com/tweet_video/EMfWoA-UcAErt3E.mp4' target='_blank'>\u2764\ufe0f</a> by SourDinosaur#0000.</center>";
	if(searchbutton != null){
		searchbutton.append(downarrow);
	}
	if(main != null){
		main.append(credits);
	}
});