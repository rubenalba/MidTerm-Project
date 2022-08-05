document.getElementById("email-form").addEventListener("submit", addPost);

function addPost(preventForm){
    preventForm.preventDefault();
    let name = document.getElementById("name").value;
    let body = document.getElementById("field").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: name, body: body }),
  })
    .then((response) => response.json())
    .then((dataDeFormulario) => {
      console.log(dataDeFormulario);
      body.value = "";
      name.value ="";
      alert("Formulario enviado");
    });
 
}