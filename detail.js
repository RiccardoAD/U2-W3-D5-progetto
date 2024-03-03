const id=new URLSearchParams(window.location.search).get("idProdotto")

const container = document.getElementById("card-body");


function crea(imageUrl, title, description,price,brand) {

    
  const col = document.createElement("div");
  col.classList.add("col-md-4","shadow")
  container.appendChild(col)
  
  
  const card = document.createElement("div");
  card.classList.add("card","rounded-1","h-200") 
  col.appendChild(card);
  
  
  const img = document.createElement("img");
  img.classList.add("card-img-top","object-it-cover")  ;
  img.src = imageUrl;
  card.appendChild(img);
  
  
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");
  card.appendChild(cardBody);
    
  
  const name = document.createElement("h3");
  name.classList.add("card-title") 
  name.innerText = title;
  cardBody.appendChild(name);
  
  
  const descrizione = document.createElement("p");
  descrizione.classList.add("card-text","border", "border-2", "p-5", "rounded-4", "border-secondary",) 
  descrizione.innerText = description;
  cardBody.appendChild(descrizione);
  
  
  const marca = document.createElement("p");
  marca.classList.add("card-text","my-4", "fw-bold") 
  marca.innerText = brand;
  cardBody.appendChild(marca);
  
  const conteiner= document.createElement("div");
  conteiner.classList.add("d-flex","align-items-center","justify-content-center")
  cardBody.appendChild(conteiner);
  

  const prezzo=document.createElement("small");
    prezzo.classList.add("fw-bold","my-4","font-monospace",);
    prezzo.innerText= "Price: "+price + "€";
    conteiner.appendChild(prezzo);

 }

const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA" 
const objectId = new URLSearchParams(window.location.search).get("id");
const url = "https://striveschool-api.herokuapp.com/api/product/"+id;

fetch(url, {
  method: "GET", 
  headers: {
    'Authorization': `Bearer ${token}`,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
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
  .then((product) => {

    
    crea( product.imageUrl, product.name, product.description,product.price, product.brand) ;
    
  })
  .catch((err) => console.log(err));














