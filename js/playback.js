function playbackSearch(num)
{
	var HTML ="<tr>";
	HTML+="<th>Camera ID</th>";
	HTML+="<th>Address</th>";
	HTML+="<th>Group ID</th>";
	HTML+="<th>Path</th>";
	HTML+="<th>Control</th>";
	HTML+="</tr>";
	for (var i = 0; i < num; i++) {
		HTML+="<tr>";
		HTML+="<td>Camera ID</td>";
		HTML+="<td>Address</td>";
		HTML+="<td>Group ID</td>";
		HTML+="<td>Path</td>";
		HTML+="<td>Control</td>";
		HTML+="</tr>";
	};
	document.getElementById("tbPlaybackCam").innerHTML= HTML; 
}