// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA
const url= " https://striveschool-api.herokuapp.com/api/product/"
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWUxMzRjNTllYzAwMTk5MGQ3MDEiLCJpYXQiOjE3MDkyODQ4ODQsImV4cCI6MTcxMDQ5NDQ4NH0.2QSzA_8OlbkW7-Q0ImBGd9WVMPall031Envq5poI_DA" 
const objectId = new URLSearchParams(window.location.search).get("idProdotto");

 const form = document.querySelector(".form");
 const btnSubmit = document.querySelector(".btnSubmit");

 const btnReset = document.querySelector(".btnReset");

const specialBtn = () => {
  const nuovoProdotto = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("productUrl").value,
    price: document.getElementById("price").value,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(nuovoProdotto),
    headers: {
      "Content-Type": "application/json",
      Authorization:
         `Bearer ${token}`,
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
    .then((nuovoProdotto) => {
      alert("Articolo: " + nuovoProdotto._id + " è stato caricato correttamente");
      form.reset();
    })
    .catch((errore) => console.log(errore));
};

const handleReset = () => {
  confirm("Sei sicuro di voler ricominciare da capo?");
  form.reset();
};

const getFetch = (objectId) => {
  fetch(url + objectId, {
    method: "GET",
    headers: {
      Authorization:
         `Bearer ${token}`,
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
    .then((object) => {
      console.log(object);
      document.getElementById("name").value = object.name;
      document.getElementById("description").value = object.description;
      document.getElementById("brand").value = object.brand;
      document.getElementById("productUrl").value = object.imageUrl;
      document.getElementById("price").value = object.price;
    })
    .catch((errore) => console.log(errore));
};

const specialBtnPut = () => {
  const nuovoProdotto = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("productUrl").value,
    price: document.getElementById("price").value,
  };
//  arrivato qui
  fetch(url + objectId, {
    method: "PUT",
    body: JSON.stringify(nuovoProdotto),
    headers: {
      "Content-Type": "application/json",
      Authorization:
         `Bearer ${token}`,
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
    .then((nuovoProdotto) => {
      alert("Articolo: " + nuovoProdotto._id + " è stato modificato correttamente");
      form.reset();
    })
    .catch((errore) => console.log(errore));
};

const delitto = () => {
  fetch(url + objectId, {
    method: "DELETE",
    headers: {
      Authorization:
         `Bearer ${token}`,
    },
  });
};

window.onload = () => {
  if (objectId) {
    getFetch(objectId);
    btnSubmit.innerText = "Modifica";
    btnReset.innerText = "Cancella";
    btnReset.classList.add("bg-danger");
    btnSubmit.addEventListener("click", () => {
      specialBtnPut();
    });
    btnReset.addEventListener("click", () => {
      delitto();
      window.location.replace("./home-page.html");
    });
  } else {
    btnSubmit.addEventListener("click", () => {
      specialBtn();
    });
    btnReset.addEventListener("click", () => {
      handleReset();
    });
  }
};


