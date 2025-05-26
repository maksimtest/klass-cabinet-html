function openTaskDetails(id){
	block = document.getElementById("block-task-content-"+id);
	block.style.display = "block";
	modeBtn = document.getElementById("block-task-mode-"+id);
	modeBtn.innerHTML = "-";
	modeBtn.setAttribute("onclick", "closeTaskDetails("+id+")");
}
function closeTaskDetails(id){
	block = document.getElementById("block-task-content-"+id);
	block.style.display = "none";
	modeBtn = document.getElementById("block-task-mode-"+id);
	modeBtn.innerHTML = "+";
	modeBtn.setAttribute("onclick", "openTaskDetails("+id+")");
}

document.getElementById('theme-selector').addEventListener('change', function () {
	const theme = this.value;
	document.getElementById('theme-link').setAttribute('href', 'css/' + theme);
});