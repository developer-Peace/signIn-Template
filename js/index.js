//initializing DB
var usernames = [
  "polawale",
  "POludamilola",
  "Oluwadamilola",
  "Iyanuoluwa",
  "Oluwatosin",
  "Fehintolaoluwa"
  ];
var passwords = [
  "Opeace18>>",
  "Precious1810",
  "olawalep",
  "polotech",
  "Blesso99",
  "Odewale"
  ];
  
function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
	
	if(username == "" || password == ""){
		alert("Fill out input fields");
	}else {
		for(x=0; x<usernames.length; x++){
			if(username == usernames[x]){
				var indexn = x;
				if(password == passwords[indexn]){
					alert("login Successful");
					break;
				}else{
					alert("wrong Password");
					break;
				}
			}
		}
	}
}

function signUp() {
	var setUsername = document.getElementById("setUsername").value;
	var setPassword = document.getElementById("setPassword").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var a = usernames.length;
	var b = passwords.length;
	
	if(setPassword == confirmPassword){
		usernames[a] = setUsername;
		passwords[b] = setPassword;
	}
}