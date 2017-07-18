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
	$("#sz2").mouseover(function(){
		$(".pinzhi").show();
	   
		});
	$("#sz2").mouseout(function(){
		$(".pinzhi").hide();
	   
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