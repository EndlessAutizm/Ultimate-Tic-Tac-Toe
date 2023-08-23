
export function goBack(){

	document.getElementById('panel').style.display = "block";
	document.getElementById('credits').style.display = "none";
	document.getElementById('settings').style.display = "none";

}

export function handleCredits(){
	
	document.getElementById('panel').style.display = "none";
	document.getElementById('credits').style.display = "block";

}

export function handleSettings(){

	document.getElementById('panel').style.display = "none";
	document.getElementById('settings').style.display = "block";

}
