console.log('Test')

//Change the url to the url of your webserver + port + /post
const nodejs_url = "http://turing.une.edu.au:12345/post"

function get_messages(){
  const element = document.getElementById("message_body");
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    element.innerHTML = this.responseText; 
  }
  xhttp.open("GET", nodejs_url, true);

  xhttp.send();
  element.scrollTop = element.scrollHeight;
}

function post_message(e){
    
    if(e.cancelable){
        e.preventDefault();
    }
    e.stopPropagation();
    console.log('clicked');
    var message = document.getElementById("msg").value;
    var name_send = document.getElementById("name_in").value;
    var params = "<b>" + name_send + "</b>" + ":" + message + "<br />";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
       console.log(this.responseText);
    }
    xhttp.open("POST", nodejs_url, true);
    xhttp.send(params);
    get_messages();
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener("submit", post_message);
  console.log('All assets are loaded')
  setInterval(get_messages, 1000);
})

