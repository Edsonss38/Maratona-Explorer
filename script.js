const elementoRespostas = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPergunta = document.querySelector("#buttonPergunta")
const resposta = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPergunta.setAttribute("disabled", true)
  
  const Pergunta = "<div>" + inputPergunta.value + "</div>"
  
  // gerar numero aleatorio
  const totalResposta = resposta.length
  const numeroAletorio = Math.floor(Math.random() * totalResposta)


  elementoRespostas.innerHTML = Pergunta + resposta[numeroAletorio]
  
  elementoRespostas.style.opacity = 1;
  
  //sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoRespostas.style.opacity = 0;
    buttonPergunta.removeAttribute("disabled")
  }, 3000)
}

