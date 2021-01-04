var numCamLiving=0;
function selectGroup(num)
{
	numCamLiving = num;
	genLiveItems(num);
	refreshLiveStream();
	document.getElementById('id01').style.display='block';
}

function closeGroup()
{
	clearLiveStream();
	document.getElementById('id01').style.display='none';
}

function genGroupItems(num)
{
	var HTML="";
	for (var i = 0; i < num; i++) {
		HTML+="<div class=\"element element-1\" onclick=\"selectGroup("+i+");\">";
		HTML+="<div class=\"lbl0_live_txt\"><a>Group 1</a></div>";
		HTML+="<div class=\"lbl1_live_img\" ><div class=\"lbl1_live_img_cam\"><img  src=\"img/cam1.png\" style=\"width:50px; height:50px;\" ></div></div>";
		HTML+="<div class=\"lbl2_live_txt\">";
		HTML+="<a>Cam: </a>";
		HTML+="<a>7</a>";
		HTML+="</div>";
		HTML+="<div class=\"lbl2_live_txt\">";
		HTML+="<a>Live: </a>";
		HTML+="<a>4</a>";
		HTML+="</div>";
		HTML+="<div class=\"lbl1_live_txt\"><label>2020-12-04</label></div>";
		HTML+="</div>";
	}
	document.getElementById("live-block-container").innerHTML= HTML; 
}

function genLiveItems(num)
{
	var HTML="";
	for (var i = 0; i < num; i++) 
	{
		HTML+="<div class=\"streamView\"  onmouseover=\"onHoverOn("+i+")\" onmouseout=\"onHoverOut("+i+")\" >";
		HTML+="<img id=\"live-img"+i+ "\" class=\"streamView-img\" src=\"img/live.png\">";
		HTML+="<div id=\"overlay_controler"+i+"\" class=\"overlay\">";
		HTML+="<table  style=\"width:100%; height:50px; border:none;\">";
		HTML+="<tr>";
		HTML+="<td style=\"width:30px; border:none;\"><div style=\"display: flex; justify-content: center;\"><img src=\"img/pause.png\" style=\"width:25px; height:25px;\"></td>";
		HTML+="<td style=\"width:30px; border:none;\"><div style=\"display: flex; justify-content: center;\"><img src=\"img/vl_s.png\" style=\"width:25px; height:25px;\"></div></td>";
		HTML+="<td style=\"width:30px;border:none;\"><div style=\"display: flex; justify-content: center; \"><p style=\"color:white;\">00:00</p></div></td>";
		HTML+="<td style=\"width:30px;border:none;\"></td>";
		HTML+="<td style=\"width:auto;border:none;\"><div style=\"display: flex\"><p style=\"color:white;\">Camera:</p></div></td>";
		HTML+="</tr>";
		HTML+="</table>";
		HTML+="</div>";
		HTML+="</div>";
	}
	document.getElementById("liveItems").innerHTML= HTML; 
}

function onHoverOn(index)
{
	var overlay_controller=document.getElementById("overlay_controler"+index).style.visibility="visible";
}
function onHoverOut(index)
{
	var overlay_controller=document.getElementById("overlay_controler"+index).style.visibility="hidden";
}
function clearLiveStream() {

	clearInterval(refreshImages);
}
function refreshLiveStream() {

	 setInterval(refreshImages, 100);
}
function refreshImages(num)
{
	for (var i = 0; i < numCamLiving; i++) 
	{
		if(document.getElementById("live-img"+i).complete==true)
		{
			var image = document.getElementById("live-img"+i); 
			image.src="http://183.80.97.170:8080//ServerStream/test?a="+ new Date().getTime();
		}
	}	
}