var code_areas = document.getElementsByClassName("code");
for(var i = 0; i < code_areas.length; i++){
	code_areas[i].style.height = "5px";
	code_areas[i].style.height = (code_areas[i].scrollHeight)+"px";
}