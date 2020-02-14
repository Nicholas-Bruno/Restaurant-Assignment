function openTab(evt, tabName) {
 
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function submitForm() {
	var x = document.forms['contactForm']['name'].value;
	var y = document.forms['contactForm']['email'].value;
	var z = document.forms['contactForm']['phone'].value;
	if (x, y, z == "") {
		alert("Please fill in the required information");
		return false;
	}
		alert("Thank you for contacting us! We'll be sure to respond in a timely manner.")
	}
	
