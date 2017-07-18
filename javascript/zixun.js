		var divs=document.getElementsByTagName("div");		
		var span0=document.getElementsByTagName("span")[0];
		var span1=document.getElementsByTagName("span")[1];
		span0.onclick=function(){
			span0.className="con2_div_left";
			span1.className="con2_div_right";
			divs[9].className="show";
			divs[10].className="";
		}
		span1.onclick=function(){
			span1.className="con2_div_left1";
			span0.className="con2_div_right1";
			divs[10].className="show";
			divs[9].className="";
		}