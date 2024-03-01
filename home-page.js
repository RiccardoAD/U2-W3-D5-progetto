
const url= " https://striveschool-api.herokuapp.com/api/product/"
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA" 
// const params= new URLSearchParams(location.search);
 
 
const row = document.getElementsByClassName("row")[0];

    
function creaCard(immagine, title, descrizione,costo) {
    
    const col = document.createElement("div");
    row.appendChild(col);
    col.className = "col-6 col-md-3";
  
    
    const card = document.createElement("div");
    col.appendChild(card);
    card.className = "card";
  
   
    const img = document.createElement("img");
    card.appendChild(img);
    img.className = "card-img-top";
    img.src = immagine;
  
    
    const body = document.createElement("div");
    card.appendChild(body);
    body.className = "card-body";
  
    
    const h5 = document.createElement("h5");
    body.appendChild(h5);
    h5.className = "card-title";
    h5.textContent = title;
  
    
    const p = document.createElement("p");
    body.appendChild(p);
    p.className = "card-text";
    p.textContent = descrizione;
  
    
    const btnDettaglio = document.createElement("a");
    body.appendChild(btnDettaglio);
    btnDettaglio.href = "./dettagli.html";
    btnDettaglio.className = "btn btn-primary me-1";
    btnDettaglio.innerText = "Info";
  
    
    const btnModifica = document.createElement("a");
    body.appendChild(btnModifica);
    btnModifica.href = "./backoffice.html";
    btnModifica.className = "btn btn-success me-1";
    btnModifica.innerText = "Modifica";
  }



fetch(url, {   
    method: "GET",
    // body: JSON.stringify(data),
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
  .then((newCards) => {
    newCards.forEach((oggetto) => {
      creaCard(oggetto.imageUrl, oggetto.name, oggetto.description);
    });
  })
  .catch((err) => console.log(err));


