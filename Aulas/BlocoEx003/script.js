var botao = document.getElementById("button");
botao.addEventListener("click", adicionar);
var botao2 = document.getElementById("finaliz");
botao2.addEventListener("click", finalizar);

var list = [];
var select = document.getElementById("select");
var res = document.getElementById("res");

function adicionar() {
  var num = document.getElementById("num").value;
  num = Number(num);
  if (num > 100 || num < 1) {
    alert("Número inválido");
  } else if (list.includes(num)) {
    alert("Numero ja incluido");
  } else {
    list.push(num);

    var option = document.createElement("option");
    option.textContent = `Vetor ${num} adicionado`;
    select.appendChild(option);
  }
}

function finalizar() {
    var soma = 0;

    res.innerHTML = ""

  var listOrdem = list.slice().sort((a, b) => a-b);

  for (let i = 0; i < list.length; i++) {
    soma = soma + list[i];
  }

  media = soma / list.length

  res.innerHTML += `<p>Ao todo temos ${list.length} números`
  res.innerHTML += `<p>O menor valor dessa lista é ${listOrdem[0]} `
  res.innerHTML += `<p>A soma de todos os numeros é ${soma}`
  res.innerHTML += `<p>A media de todos os números é ${media}`
}
