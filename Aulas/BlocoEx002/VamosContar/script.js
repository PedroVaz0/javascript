document.getElementById("button").addEventListener("click", contar);
var msgcontagem = document.getElementById("msgcontagem");
var exibicao = document.getElementById("contagem");

function contar() {
  exibicao.innerHTML = "Contando:";
  msgcontagem.innerHTML = "";

  var inicio = document.getElementById("inicio").value;
  var fim = document.getElementById("fim").value;
  var passo = document.getElementById("passo").value;
  var contagem = Number(inicio);

  if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
    alert("Dados não completos!!!");
  } else if (Number(passo) == 0) {
    window.alert("Numero de passo invalido");
  } else if (contagem <= Number(fim)) {
    while (contagem <= Number(fim)) {
      msgcontagem.innerHTML += `👉 ${contagem}`;
      contagem = contagem + Number(passo);
    }
  } else {
    s;
    while (contagem >= Number(fim)) {
      msgcontagem.innerHTML += `👉 ${contagem}`;
      contagem = contagem - Number(passo);
    }
  }
}
