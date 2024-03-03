
const url= " https://striveschool-api.herokuapp.com/api/product/"
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA"
const conteinerCards = document.getElementById("container");
        
fetch(url, {   
  method: "GET",
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
  .then((newCards)=>{
    newCards.forEach((prodotto ) => {
      addNewCards(prodotto.imageUrl, prodotto.name, prodotto._id, prodotto.price, prodotto.brand);

      
    });


  })

  .catch((err) => console.log(err));
  
  
  
    
    function addNewCards(imageUrl, title, id,price,brand) {

      
      const col = document.createElement("div");
      col.classList.add("col-md-4","gy-2")
      conteinerCards.appendChild(col)
      
      
      const card = document.createElement("div");
      card.classList.add("card","p-1","mb-2","rounded-1","h-100") 
      col.appendChild(card);
      
      
      const img = document.createElement("img");
      img.classList.add("card-img-top","object-fit-cover")  ;
      img.src = imageUrl;
      card.appendChild(img);
      
      
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center");
      card.appendChild(cardBody);
        
      
      const name = document.createElement("h3");
      name.classList.add("card-title") 
      name.innerText = title;
      cardBody.appendChild(name);
      
     const marca = document.createElement("p");
      marca.classList.add("card-text") 
      marca.innerText = brand;
      cardBody.appendChild(marca);
      
      const conteiner= document.createElement("div");
      conteiner.classList.add("d-flex","align-items-center")
      cardBody.appendChild(conteiner);
      
      const btnContainer=document.createElement("div");
      conteiner.appendChild(btnContainer)
      
      const btnDettaglio = document.createElement("a");
      btnDettaglio.href = `./detail.html?idProdotto=${id}`;
      btnDettaglio.classList.add("btn","btn-success", "me-1")
      btnDettaglio.innerText = "Info";
      btnContainer.appendChild(btnDettaglio);
      
      const btnModifica = document.createElement("a");
      btnModifica.href = `./back-office.html?idProdotto=${id}`;
      btnModifica.classList.add("btn",  "btn-warning", "m-1");
      btnModifica.innerText = "Modifica";
      btnContainer.appendChild(btnModifica);
  
        const prezzo=document.createElement("small");
        prezzo.classList.add("fw-bold","ms-5","ms-auto");
        prezzo.innerText= "Price: "+price + "€";
        conteiner.appendChild(prezzo);
    
     }