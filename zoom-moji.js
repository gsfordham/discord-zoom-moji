(()=>{
	let big_moji = (()=>{((big)=>{
		((epicker, big, cb)=>{
			epicker.forEach((x)=>{
				big(x);
				let pw = ((window.getComputedStyle(x)).getPropertyValue("width"));
				let ph = ((window.getComputedStyle(x)).getPropertyValue("height"));
				let esize = ((window.getComputedStyle(
					x.querySelector("div[class^=emojiItem]"))).getPropertyValue("width"));
				
				cb(x, big);
				x.addEventListener("click", (()=>{cb(x, big);}));
				x.addEventListener("wheel", (()=>{cb(x, big);}));
				x.addEventListener("keyup", (()=>{cb(x, big);}));
			});
		})((document.body.querySelectorAll("div[class^=emojiPicker]")),
			big,
			((x, cb = big)=>{
				let emsz = ((parseFloat((window.getComputedStyle(x)).getPropertyValue("width"))) / 12.0);
				let sch = ((window.getComputedStyle(x)).getPropertyValue("height"));
				x.querySelectorAll("div[class^=scrollerWrap]").forEach((x)=>{cb(x, false, true, sch);});
				x.querySelectorAll("div[class^=scroller-]").forEach((x)=>{cb(x, false, true, sch);});
				x.querySelectorAll("div[class^=row-]").forEach((x)=>{cb(x, false, true, emsz);});
				x.querySelectorAll("div[class^=emojiItem]").forEach((x)=>{cb(x, true, true, emsz);});
			})
		);
	})(((x, w = true, h = true, sz = null)=>{
		let dattr = "data-resized";
		if((x.getAttribute(dattr)) == null){
			let is = (window.getComputedStyle(x));
			let multiplier = 1.5;
			if(sz == null){
				x.style.width = ((multiplier * (parseFloat((is.getPropertyValue("width"))))) + "px");
				x.style.height = ((multiplier * (parseFloat((is.getPropertyValue("height"))))) + "px");
			}else{
				if(w != false){x.style.width = (parseFloat(sz) + "px");}
				if(h != false){x.style.height = (parseFloat(sz) + "px");}
			}
			x.setAttribute(dattr, "set");
		}
	}));});

	document.addEventListener("click", ((event)=>{
		for(var i = 0; i < (event.target.classList.length); i++){
			if(/^(reactionBtn|sprite(Hovered|Normal)).*/.test(event.target.classList[i])){
				setTimeout(big_moji, 1000);
			}
		}
	}));
})();