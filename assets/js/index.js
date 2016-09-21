
		
			function centerPhoto() {
			
				document.getElementById("bgphoto").style.top = Math.min(0,((document.getElementById("content_wrapper").offsetTop - window.pageYOffset) / 2) - (document.getElementById("bgphoto").offsetHeight / 2)) + "px";
			}
			
			function scrollView() {
				var scrollHeight = window.innerHeight;
				
				if(screen.width != 320) {
					var scale = Math.max(Math.min(1-((window.pageYOffset/(scrollHeight*0.8))*0.61),1),0.39);
					var yMove = Math.max(Math.min((window.pageYOffset/(scrollHeight*0.8))*-340,0),-340);
					var yMoveb = Math.max(Math.min((window.pageYOffset/(scrollHeight*1.2))*-240,0),-240);
					var opacity = 1-Math.max(Math.min((window.pageYOffset/(scrollHeight*0.6)),1),0);
					var opacityb = 1-Math.max(Math.min(((window.pageYOffset-(scrollHeight/6))/(scrollHeight*2.5)),1),0);
					document.getElementById("promowrap").style.webkitTransform = "translate3D(0,"+yMove+"px,0)";
					document.getElementById("promocontent").style.webkitTransform = "scale("+ scale +")";
					document.getElementById("promocontent").style.opacity = opacity;
					document.getElementById("mapbg").style.opacity = 1-opacityb;
					document.getElementById("mapbg").style.webkitTransform = "translate3D(0,"+yMoveb+"px,0)";
				}
			}
			function hoverStory(tNum) {
				for(x = 1; x <= 3; x++) {
					if(x == tNum) {
						document.getElementById(("story" + tNum)).style.opacity = 1;
						document.getElementById(("story" + tNum)).style.borderColor = "#ff9a00";
					} else {
						document.getElementById(("story" + x)).style.opacity = 0.2;
						document.getElementById(("story" + x)).style.borderColor = "#fff";
					}
				}
			}
			
			function leaveStory() {
				for(x = 1; x <= 3; x++) {
					document.getElementById(("story" + x)).style.opacity = 1;
					document.getElementById(("story" + x)).style.borderColor = "#fff";
				}
			}

			// Test element we apply both kinds of transforms to:
			var testEl = document.createElement('div');
			testEl.style.MozTransform = 'translate(100px) rotate(20deg)';
			testEl.style.webkitTransform = 'translate(100px) rotate(20deg)';
			testEl.style.msTransform = 'translate(100px) rotate(20deg)';
			//testEl.style.OTransform = 'translate(100px) rotate(20deg)';
			var styleAttrLowercase = testEl.getAttribute('style').toLowerCase();
			
			// when we check for existence of it in the style attribute;
			// only valid ones will be there.
			var hasMozTransform = styleAttrLowercase.indexOf('moz') !== -1;
			var hasWebkitTransform = styleAttrLowercase.indexOf('webkit') !== -1;
			var hasOTransform = styleAttrLowercase.indexOf('O') !== -1;
			var hasMSTransform = styleAttrLowercase.indexOf('ms') !== -1;
			if(!hasMozTransform && !hasOTransform && !hasWebkitTransform) {
				//hasMSTransform = styleAttrLowercase.indexOf('transform') !== -1;
			}

			var mmarket_bg_top;
			var lowfloortram_bg_top;
		
			function centerPhoto() {
				if(screen.width != 320) {
				
				document.getElementById("bgphoto").style.top = Math.min(0,((document.getElementById("content_wrapper").offsetTop - window.pageYOffset) / 2) - (document.getElementById("bgphoto").offsetHeight / 2)) + "px";
				
				var scale = Math.max(Math.min(1-((window.pageYOffset/300)*0.61),1),0.39);
				var opacity = 1-Math.max(Math.min((window.pageYOffset/300),1),0);
				var opacityb = 1-Math.max(Math.min((window.pageYOffset/450),1),0);
				var yMove = Math.max(Math.min((window.pageYOffset/300)*-340,0),-340)*-0.5;
				
				
				document.getElementById("mcirclebox").style.opacity = opacity;
				document.getElementById("photo_overlay_content").style.opacity = opacityb;
				
				var y = window.pageYOffset;
				
				if(hasWebkitTransform) {
					document.getElementById("mcirclebox").style.webkitTransform = "translate3D(0,"+yMove+"px,0)";
					document.getElementById("mcircle").style.webkitTransform = "scale("+ scale +")";
					document.getElementById("mmarket_bg").style.webkitTransform = "translate3D(0,"+ parseInt((-y+(mmarket_bg_top + 1400)) / -5) +"px,0)";
					document.getElementById("lowfloortram_bg").style.webkitTransform = "translate3D(0,"+ parseInt((-y+(lowfloortram_bg_top + 2000)) / -5) +"px,0)";
					document.getElementById("subway_bg").style.webkitTransform = "translate3D(0,"+ parseInt((-y+(lowfloortram_bg_top + 1400)) / -5) +"px,0)";
				} else if(hasMozTransform) {
					document.getElementById("mcirclebox").style.mozTransform = "translate3D(0,"+yMove+"px,0)";
					document.getElementById("mcircle").style.mozTransform = "scale("+ scale +")";
					document.getElementById("mmarket_bg").style.mozTransform = "translate3D(0,"+ parseInt((-y+(mmarket_bg_top + 1400)) / -5) +"px,0)";
					document.getElementById("lowfloortram_bg").style.mozTransform = "translate3D(0,"+ parseInt((-y+(lowfloortram_bg_top + 2000)) / -5) +"px,0)";
					document.getElementById("subway_bg").style.mozTransform = "translate3D(0,"+ parseInt((-y+(lowfloortram_bg_top + 1400)) / -5) +"px,0)";
				} else {
					document.getElementById("mcirclebox").style.transform = "translate3D(0,"+yMove+"px,0)";
					document.getElementById("mcircle").style.transform = "scale("+ scale +")";
					document.getElementById("mmarket_bg").style.transform = "translate3D(0,"+ parseInt((-y+(mmarket_bg_top + 1400)) / -5) +"px,0)";
					document.getElementById("lowfloortram_bg").style.transform = "translate3D(0,"+ parseInt((-y+(lowfloortram_bg_top + 2000)) / -5) +"px,0)";
					document.getElementById("subway_bg").style.transform = "translate3D(0,"+ parseInt((-y+(lowfloortram_bg_top + 1400)) / -5) +"px,0)";
				}
				
				}
				
			}
			
			function nextTrainDesc() {
				document.getElementById("lowfloortram_bg").style.opacity = 1.0;
				document.getElementById("text1").style.opacity = 0;
				document.getElementById("text2").style.opacity = 1.0;
				if(hasWebkitTransform) {
					document.getElementById("text1").getElementsByClassName("overlay")[0].style.webkitTransform = "translate3D(-460px,0,0)";
					document.getElementById("text2").getElementsByClassName("overlay")[0].style.webkitTransform = "translate3D(-460px,0,0)";
				} else if(hasMozTransform) {
					document.getElementById("text1").getElementsByClassName("overlay")[0].style.mozTransform = "translate3D(-460px,0,0)";
					document.getElementById("text2").getElementsByClassName("overlay")[0].style.mozTransform = "translate3D(-460px,0,0)";
				} else {
					document.getElementById("text1").getElementsByClassName("overlay")[0].style.transform = "translate3D(-460px,0,0)";
					document.getElementById("text2").getElementsByClassName("overlay")[0].style.transform = "translate3D(-460px,0,0)";
				}
				document.getElementById("nextro").className = "inactive";
				document.getElementById("backro").className = "active";
				
				//window.setInterval("hideTram()", 700);
				
			}
			
			
			function prevTrainDesc() {
				document.getElementById("lowfloortram_bg").style.opacity = 0.0;
				document.getElementById("text2").style.opacity = 0;
				document.getElementById("text1").style.opacity = 1.0;
				if(hasWebkitTransform) {
					document.getElementById("text1").getElementsByClassName("overlay")[0].style.webkitTransform = "translate3D(0,0,0)";
					document.getElementById("text2").getElementsByClassName("overlay")[0].style.webkitTransform = "translate3D(0,0,0)";
				} else if(hasMozTransform) {
					document.getElementById("text1").getElementsByClassName("overlay")[0].style.mozTransform = "translate3D(0,0,0)";
					document.getElementById("text2").getElementsByClassName("overlay")[0].style.mozTransform = "translate3D(0,0,0)";
				} else {
					document.getElementById("text1").getElementsByClassName("overlay")[0].style.transform = "translate3D(0,0,0)";
					document.getElementById("text2").getElementsByClassName("overlay")[0].style.transform = "translate3D(0,0,0)";
				}
				document.getElementById("nextro").className = "active";
				document.getElementById("backro").className = "inactive";
				
				//window.setInterval("hideTram()", 700);
				
			}
			
			function hideTram() {
				document.getElementById("lowfloortram_bg").style.opacity = 0.0;
			}
			
			function swapStep(tStep) {
				document.getElementById(tStep).className = "tabButton_h";
				document.getElementById(tStep + "content").style.display = "block";
				
				for(var x = 2; x <= 5; x++) {
					if(("step"+x) != tStep) {
						document.getElementById("step"+x).className = "tabButton";
						document.getElementById("step" + x + "content").style.display = "none";
					}
				}
			}
			
			window.addEventListener("gesturechange", centerPhoto, false);
			