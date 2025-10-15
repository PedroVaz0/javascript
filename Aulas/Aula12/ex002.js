
var hora = new Date().getHours()

console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log('Bom dia!')
}
else if(hora < 19){
    console.log('Boa tarder!')
}else{
    console.log('Boa noite!')
}