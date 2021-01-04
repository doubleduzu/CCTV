function createCamera(num)
{
	var HTML ="<tr>";
	HTML+="<th>Camera ID</th>";
	HTML+="<th>Address</th>";
	HTML+="<th>Group ID</th>";
	HTML+="<th>Status</th>";
	HTML+="<th>Control</th>";
	HTML+="</tr>";
	for (var i = 0; i < num; i++) {
		HTML+="<tr>";
		HTML+="<td>Camera ID</td>";
		HTML+="<td>Address</td>";
		HTML+="<td>Group ID</td>";
		HTML+="<td>Status</td>";
		HTML+="<td>Control</td>";
		HTML+="</tr>";
	};
	document.getElementById("tbRegCam").innerHTML= HTML; 

}