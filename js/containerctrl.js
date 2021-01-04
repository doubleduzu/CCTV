function changeTabCtrl(mainId)
{
  var i;
  var x = document.getElementsByClassName("maincontainer");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(mainId).style.display = "block"; 
  if(mainId!="playbackId")
  {
  	var video=document.getElementById("videoplbck").pause();
  } 
}