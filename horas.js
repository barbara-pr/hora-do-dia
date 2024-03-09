function carregar(){
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.getElementById('fotos')
    var bom = window.document.getElementById('good')
    
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
   
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.` 

    if (hora >= 0 && hora < 12){
        //Bom dia!
        foto.src = ('./imagens/manha.png')
        bom.innerText = "Bom dia!"
        document.body.style.background = "antiquewhite"
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        foto.src= './imagens/tarde.png'
        bom.innerText = "Boa tarde!"
        document.body.style.background = "#aaccaa9f"
    } else /*(hora > 18 && hora < 5)*/{
        //Boa noite!
        foto.src = ('./imagens/noite.png')
        bom.innerText = "Boa noite!"
        document.body.style.background = "#2a1c3649"
    }
}
