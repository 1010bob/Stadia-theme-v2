window.addEventListener("load", () => {
	let footer = document.querySelector(".wvCs4c.ltdNmc");
	let searchbutton = document.querySelector(".g3joHc");
	let downarrow = document.createElement("span");
	let credits = document.createElement("span");
	downarrow.id = "downarrow";
	credits.id = "credits";
	downarrow.innerHTML = "<div class='arrow'><span></span><span></span><span></span></div>";
	credits.innerHTML = "<center style='padding-bottom: 1%;'>Theme created with <a href='https://video.twimg.com/tweet_video/EMfWoA-UcAErt3E.mp4' target='_blank'>\u2764\ufe0f</a> by SourDinosaur#0000.</center>";
	
	let nav = document.querySelector(".eMobNd");
	// Add profile to navigation
	let profileitem = document.createElement("li");
	profileitem.classList.add('qVcdD');
	profileitem.innerHTML = "<a href='/profile' class='L4d3Ob QAAyWd wJYinb' track:impression,click'>Profile</a>";
	if(window.location.toString() === "https://stadia.google.com/profile"){
		profileitem.innerHTML = "<a href='/profile' class='L4d3Ob QAAyWd wJYinb YySNWc' track:impression,click'>Profile</a>";
	}else{
		profileitem.innerHTML = "<a href='/profile' class='L4d3Ob QAAyWd wJYinb' track:impression,click'>Profile</a>";
	}
	
	// Add settings to navigation
	let settingsitem = document.createElement("li");
	settingsitem.classList.add('qVcdD');
	settingsitem.innerHTML = "<a href='/settings' class='L4d3Ob QAAyWd wJYinb' track:impression,click'>Settings</a>";
	if(window.location.toString() === "https://stadia.google.com/settings"){
		settingsitem.innerHTML = "<a href='/settings' class='L4d3Ob QAAyWd wJYinb YySNWc' track:impression,click'>Settings</a>";
	}else{
		settingsitem.innerHTML = "<a href='/settings' class='L4d3Ob QAAyWd wJYinb' track:impression,click'>Settings</a>";
	}
	
	// Remove settings from burger
	let settingsburger = document.querySelector(".pBvcyf.QAAyWd");
	document.querySelectorAll('[role="menuitem"]').forEach(function (el){
		if(el.innerHTML.indexOf("settings") !== -1){
			el.innerHTML = "";
		}
	});
	//settingsburger.innerHTML = "";

	// Whenever the user selects a game, this adds content to a menu to easily achieve links
	let playbuttonbase = document.querySelector(".Rt8Z2e.QAAyWd.gUd0w.QpvIEe.Ia7QKc");
	let achievementsbutton = document.createElement("span");
	achievementsbutton.classList.add("gamemenucontent");
	achievementsbutton.innerHTML = "This is a test.";
	if(playbuttonbase != null){
		playbuttonbase.append(achievementsbutton);
	}

	if(searchbutton != null){
		searchbutton.append(downarrow);
	}
	if(footer != null){
		footer.append(credits);
	}
	if(nav != null){
		nav.append(profileitem);
		nav.append(settingsitem);
	}
});