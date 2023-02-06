var conteudo;
var x = document.getElementById("mostra-conteudo");
var y = document.getElementById("oculta-conteudo");

function temTexto() {
  var conteudo = document.getElementById("digita-texto").value;
  if (conteudo == "") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

//validação de caracteres especiais e campo vazio
function ValidarConteudo() {
  var conteudo = document.getElementById("digita-texto").value;

  if (conteudo == "") {
    alert("Por favor, digite alguma coisa!");
  } else {
    const pattern = /[0-9A-ZÀ-ü@´`^~'"]/;
    if (conteudo.match(pattern)) {
      alert("Somente letras minúsculas e sem acento!");
      document.getElementById("digita-texto").value = "";
    }
  }
}

//Função para criptografar o conteúdo
function criptografar() {
  ValidarConteudo(); // Antes de fazer a criptografia é chada a função para validar o conteúdo

  var conteudo = document.getElementById("digita-texto").value.toLowerCase();
  var txtCriptografado = conteudo
    .replace(/e/gim, "enter")
    .replace(/o/gim, "ober")
    .replace(/i/gim, "imes")
    .replace(/a/gim, "ai")
    .replace(/u/gim, "ufat");
  document.getElementById("saida-texto").innerHTML = txtCriptografado;
  temTexto();
}

//Função para descriptografar o código
function descriptografar() {
  var conteudo = document.getElementById("digita-texto").value.toLowerCase();
  var txtDescriptografado = conteudo
    .replace(/enter/gim, "e")
    .replace(/ober/gim, "o")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ufat/gim, "u");
  document.getElementById("saida-texto").innerHTML = txtDescriptografado;
  temTexto();
}

//Função para copiar o código criptografado

function CopiaCriptografia() {
  var conteudoVAzio = document.getElementById("saida-texto").value;
  if (conteudoVAzio == "") {
    alert("Não há nada para ser copiado!");
  } else {
    var copiar = document.getElementById("saida-texto");
    copiar.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copiar.value);
    alert(
      "Mensagem capturada 😀 Por favor, cole na caixa de texto inicial."
    );
  }
}
