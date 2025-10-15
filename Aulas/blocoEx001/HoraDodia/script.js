var content = document.getElementsByClassName('content')[0]
var hora = new Date().getHours()
var img = document.getElementById('img')

content.innerHTML = `<p>Agora são ${hora} horas</p>`
if (hora < 12){  
    content.innerHTML += `<p>Bom dia</p>`
    document.body.style.background = 'white'
}
else if(hora < 19){
        img.src = 'img/tarde.jpeg'
        content.innerHTML += `<p>Boa tarde</p>`
        document.body.style.background = 'orange'
}
else{
        img.src = 'noite.jpeg'
        content.innerHTML += `<p>Boa noite</p>`
        document.body.style.backgroundColor = 'black'
}
