function advice(){
    const url = `https://api.adviceslip.com/advice`
    fetch(url).then(
        response => response.json()
    ).then(
        data => {mudarHtml(data)}
    )
}

function mudarHtml(data){
    const titulo = document.querySelector(".conteudo__titulo")
    const texto = document.querySelector(".conteudo__texto")
    titulo.innerHTML = `advice #${data.slip.id}`
    texto.innerHTML =  data.slip.advice

}


