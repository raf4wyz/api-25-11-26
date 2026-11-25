// requisição de dados usando o metodo get 
async function load() {
    const REQUEST = await fetch ("https://www.onepieceapi.com/api/devil-fruits")
    return await REQUEST.json();
}

let dados = await load();

console.log(dados[0].type)

let body = document.querySelector("body")

//  ESCREVENDO TODAS AS INFORMAÇÕES NO HTML 

dados.forEach(element => {
    body.innerHTML += `
    <div class= "container">
    <h1>${element.name.en}</h1>
    <h2>Fruta do tipo ${element.type}</h2>
    <img src="${element.image_url}">

    </div>
    `
});

