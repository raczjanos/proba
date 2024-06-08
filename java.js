function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);  
}
function dark()
{
  document.getElementById("stylechange").onclick = swapStyleSheet("css/dark.css");
}
function light()
{
  document.getElementById("stylechange").onclick = swapStyleSheet("css/alap.css");
}

