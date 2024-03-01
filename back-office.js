// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA
const url= " https://striveschool-api.herokuapp.com/api/product/"
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA" 
// const params= new URLSearchParams(location.search);
// const id= params.get("id");


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        postData();
    });
    
  });


 function postData() {
        const productName=document.getElementById("name").value
        const productDesc=document.getElementById("description").value
        const productBrand=document.getElementById("brand").value
        const productImageUrl=document.getElementById("productUrl").value
        const productPrice=document.getElementById("price").value
      

       const data = {
        name: productName ,
        description:productDesc ,
        brand: productBrand,
        imageUrl: productImageUrl,
        price:productPrice ,
      };
    
  




fetch(url, {   
    method: "POST",
    body: JSON.stringify(data),
    headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        }



})
.then((response) => {
    console.log(response);

    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 400) {
        throw new Error("400 - Errore lato client");
      }

      if (response.status === 404) {
        throw new Error("404 - Dato non trovato");
      }

      if (response.status === 500) {
        throw new Error("500 - Errore lato server");
      }

      throw new Error("Errore nel reperimento dati");
    }
  })
  .then((newProduct) => {
    
    if (newProduct) {
      console.log();("Appuntamento con id: " + " è stato modificato con successo ");
    } else {
      console.log();("Appuntamento con id: " + " è stato creato correttamente");

    
      e.target.reset();

      
    }
  })
  .catch((err) => console.log(err));
}



