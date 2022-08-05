document.getElementById("getJson").addEventListener("click", getJson);

function getJson() {
   
    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => response.json())
    .then((res) => {
      
     let apiData = `
      <div class="section">
      <div class="container">
        <h1>${res.id}</h1>
        <div class="details">
          <p>${res.body}</p>
        </div>
      </div>
    </div> 
      `
      

    
       document.getElementById("output").innerHTML = apiData;
    });
    // console.log(apiData)
}
