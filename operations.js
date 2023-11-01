function change() {
	var borderR = document.getElementById("borderR").value;
	var borderG = document.getElementById("borderG").value;
	var borderB = document.getElementById("borderB").value;

	var width = document.getElementById("width").value;

	var fontR = document.getElementById("fontR").value;
        var fontG = document.getElementById("fontG").value;
        var fontB = document.getElementById("fontB").value;

	var backR = document.getElementById("backR").value;
        var backG = document.getElementById("backG").value;
        var backB = document.getElementById("backB").value;

	var dummy_text = document.getElementById("dummy_text");
	
	dummy_text.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
	dummy_text.style.borderWidth = width;
	dummy_text.style.color = `rgb(${fontR},${fontG},${fontB})`;
	dummy_text.style.backgroundColor = `rgb(${backR},${backG},${backB})`;
}





function check() {
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;

	if (password1.length < 8) {
		alert("Password must be at least eight characters long.");
	} else {
		if (password1 == password2){
			alert("Password verified and matched.");
		} else {
			alert("Passwords do not match.");
		}

	}

}
