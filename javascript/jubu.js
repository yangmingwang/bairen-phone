function byClass(inner,cName){
	var led=document.getElementById(inner);
	var tags=document.all?inner.all:document.getElementsByTagName("*");
	var arr=[];
	for(var i=0;i<tags.length;i++){
		if (tags[i].className==cName) {
			arr.push(tags[i]);
		};
	};
	return arr;
};
	byClass("inner","cName");  //调取

$(function(){
	$("#sz2").click(function(){
		$(".pinzhi").show();
	   
		});
	$("#sz2").mouseover(function(){
		$(".pinzhi").show();
	   
		});
	$("#sz2").mouseout(function(){
		$(".pinzhi").hide();
	   
		});
	$("#sz1").on("click",function(){
		$(".anli").show();
		});
	$("#sz1").mouseover(function(){
		$(".anli").show();
	
		});
	$("#sz1").mouseout(function(){
		$(".anli").hide();
	
		});
	
	$(".anli").mouseover(function(){
				$(".anli").show();
		});
   
	$(".anli").mouseout(function(){
				$(".anli").hide();
	
		});
	$(".pinzhi").mouseover(function(){
				$(".pinzhi").show();
	
		});
	$(".pinzhi").mouseout(function(){
				$(".pinzhi").hide();
	
		});
	
		});


// jQuery(document).ready(function() { 
// var nav = jQuery("#nav"); 
// var nav_top = nav.offset().top; 
// reset_nav_top(nav, nav_top); 
// jQuery(window).scroll(function() { 
// reset_nav_top(nav, nav_top); 
// }); 
// }); 
// function reset_nav_top(nav, nav_top) { 
// var document_scroll_top = jQuery(document).scrollTop(); 
// if (document_scroll_top > nav_top) { 
// nav.css('top', document_scroll_top); 
// } 
// if (document_scroll_top <= nav_top) { 
// nav.css('top', nav); 
// } 
// } 



// window.onscroll=function(){ 
//     var t=document.documentElement.scrollTop||document.body.scrollTop;  
//     var nav=document.getElementById("nav"); 
//     if(t>= 100){ 
//         nav.style.position = "fixed";
//         nav.style.top = "0px";
//     }else{ 
//         nav.style.position = "absolute";
//         nav.style.top = "100px";
//     } 
// }