/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
      console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "https://docs.python.org/fr/3/library/venv.html", true);
//https://www.thetrainline.com/book/results?origin=a4431587a3a5de3adb5064ea8662dc76&destination=7934d8db8d6e186458adfa2ba5133d33&outwardDate=2022-05-20T10%3A45%3A00&outwardDateType=departAfter&journeySearchType=single&passengerDiscountCards%5B%5D=cc0d4093a75d41d14b91242fa9b74f6d5e541c9d&passengers%5B%5D=2009-05-20%7Ceb99d7f4-1649-48a5-a03d-5d7560304d8e&passengers%5B%5D=1995-05-20%7Ca0b2450b-6855-4c3a-9f96-1cbf69761244&directSearch=false&lang=fr&selectedOutward=vNmasDwhOoE%3D%3AJPkZZagnWZE%3D%3AStandard
xhttp.send();*/

// 1. Créer un nouvel objet XMLHttpRequest
let xhr = new XMLHttpRequest();

// 2. Le configure : GET-request pour l'URL /article/.../load
xhr.open('GET', 'https://docs.peewee-orm.com/en/latest/peewee/querying.html');

// 3. Envoyer la requête sur le réseau
xhr.send();

// 4. Ceci sera appelé après la réception de la réponse
xhr.onload = function() {
  if (xhr.status != 200) { // analyse l'état HTTP de la réponse
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response est la réponse du serveur
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // pas de Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

