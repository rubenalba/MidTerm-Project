getJson();

function getJson() {
   
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((res) => {
      
     let apiData = `
      <div class="section">
      <div class="container">
        <h1> Id de la API: ${res.id}</h1>
        <div class="details">
          <p>Contenido: ${res.body}</p>
        </div>
      </div>
    </div> 
      `
      
       document.getElementById("output").innerHTML = apiData;
    });
}