function answerQuery(query) {
  query = query.toLowerCase();
  
  // Weather Response
  if (query.indexOf("rain") != -1 || query.indexOf("sun") != -1 || query.indexOf("weather") != -1){
    return "I do not care too much about weather, I'm locked inside a data center.";
  }

  // Coffee response 
  if (query.indexOf("coffee") != -1 || query.indexOf("donuts") != -1 || query.indexOf("drink") != -1) {
    return "I would love coffee and donuts but it would destroy my circuits!";  
  }


  // Football response
  if (query.indexOf("football") != -1 || query.indexOf("league") != -1 || query.indexOf("club") != -1){
    return "Manchester united is the only footbal club you neeed to know about.";
  }
  
  
 //  Tea Response
 if (query.indexOf("tea") != -1 || query.indexOf("biscuit") != -1 || query.indexOf("cookie") != -1) {
	return "I see you like tea or biscuits! So do I";
 }
 
 
 // Japan response
 if (query.indexOf("japan") != -1 || query.indexOf("tokyo") != -1 || query.indexOf("anime") != -1) {
	return "I would love to try A5 Wagyu if I had mouth, but I don't.";
  }

  // Otherwise response
  return "Sorry Dave, I cannot do that."
  
  }


function handleSayClick() {
  // We first get the 'message' that the user entered and 'conversation' element
  // which we are using for showing all the conversation history
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  
  // Get answer for the given query and show the query & answer
  var answer = answerQuery(message)
  conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
}


document.getElementById("sayit").onclick = handleSayClick;