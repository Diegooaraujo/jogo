const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let pontuacaoGrupoUm = 0
let pontuacaoGrupoDois=0


function numRandom(){
  return Math.floor(Math.random()*4)

}
let randomNum = numRandom()
console.log(randomNum)


let currentQuestionIndex = 0
let indexQuestionDois = 0 
let indexQuestionTres = 0


let perdaDePonto = 0
let perdaDePontoDois = 0
let ganhoDePonto = 0
let ganhoDePontoDois = 0


const questions = [
  {
    question: "Como a sociedade pode influenciar a percepção das pessoas sobre seus corpos à medida que envelhecem?",
    answers: [
      { text: "Promovendo a aceitação da diversidade de corpos.", correct: false },
      { text: "Refletindo uma variedade de idades na mídia.", correct: false },
      { text: "Valorizando a juventude e a beleza", correct: true },
      { text: "Enfatizando a importância da saúde mental.", correct: false }
    ]
  },
  {
    question: "Por que algumas pessoas podem sentir-se mais inseguras em relação à sua aparência à medida que envelhecem?",
    answers: [
      { text: "Devido à pressão para se adequarem aos padrões de beleza da juventude.", correct: true },
      { text: "Porque a mídia mostra corpos de todas as idades como ideais.", correct: false },
      { text: "Porque a juventude é considerada menos atraente pela sociedade.", correct: false },
      { text: "Devido à valorização da maturidade pela sociedade.", correct: false }
    ]
  },
  {
    question: 'Qual é um dos principais fatores sociais que pode impactar o desenvolvimento psicológico durante a meia-idade?',
    answers: [
      { text: ' Expectativas de sucesso financeiro', correct: true },
      { text: 'Pressão para se manter fisicamente ativo', correct: false },
      { text: 'Preferências alimentares', correct: false },
      { text: "Habilidades de comunicação interpessoal ", correct: false }
    ]
  },
  {
    question: 'Qual é o papel da mídia na influência da percepção das pessoas sobre seus corpos?',
    answers: [
      { text: "Promover a aceitação de todos os tipos de corpo.", correct: false },
      { text: "Refletir os ideais de beleza de todas as idades.", correct: false },
      { text: "Enfatizar a importância da saúde física sobre a aparência", correct: false },
      { text: "Exibir corpos jovens como ideais, reforçando a pressão para parecer mais jovem.", correct: true }
    ]
  },
  {
    question: 'Como as expectativas de envelhecimento podem influenciar a experiência da meia-idade?',
    answers: [
      { text: 'Exercendo pouca ou nenhuma influência sobre a autoimagem e as metas de vida.', correct: false },
      { text: 'Moldando a forma como os indivíduos enfrentam os desafios e aproveitam as oportunidades.', correct: true },
      { text: 'Contribuindo para uma sensação de estabilidade emocional durante essa fase da vida.', correct: false },
      { text: 'Afetando apenas as relações sociais imediatas.', correct: false }
    ]
  }
]

const questionDois = [ {
  question: "Qual das seguintes afirmativas melhor descreve uma das pressões sociais enfrentadas durante a meia-idade?",
  answers: [
    { text: "A necessidade de adquirir novos hobbies para acompanhar as tendências culturais.", correct: false },
    { text: "A pressão para permanecer jovem e alcançar marcos de vida específicos.", correct: true },
    { text: "A expectativa de manter um estilo de vida financeiramente extravagante.", correct: false },
    { text: "O desejo de alcançar uma posição de destaque em organizações de voluntariado.", correct: false }
  ]
},
{
  question: "Em indivíduos de meia-idade, a simplificação conceitual refere-se á:",
  answers: [
    { text: "chegada da idade avançada e sua simplicidade com base na meia-idade.", correct: false },
    { text: "mudança e alimentação positiva de uma base espiritual saudavel.", correct: false },
    { text: "capacidade de reduzir complexidade ou conceitos multifacetados em ideias mais simples.", correct: true },
    { text: "Uma tendência a buscar novas experiências e desafios.", correct: false }
  ]
},
{
  question: "Durante a meia-idade, qual das seguintes preocupações financeiras é mais comum para indivíduos nessa faixa etária?",
  answers: [
    { text: "Perda de cabelo", correct: true },
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Aumento da densidade óssea", correct: false }
  ]
},
{
  question: "Durante a meia-idade, quais desses fatores podem contribuir para um aumento do estresse?",
  answers: [
    { text: "Redução das responsabilidades familiares", correct: false },
    { text: "Estabilidade financeira", correct: false },
    { text: "Melhoria na qualidade do sono", correct: false },
    { text: "Preocupações com a saúde dos pais idosos", correct: true }
  ]
},
{
  question: "Referente a um exemplo de simplificação conceitual, a alternativa correta seria:",
  answers: [
    { text: " Uma abordagem cognitiva que envolve a reestruturação de esquemas mentais para simplificar informações complexas, ", correct: false },
    { text: "Um fenômeno psicológico em que indivíduos de meia-idade recorrem à simplificação heurística para reduzir a carga cognitiva", correct: false },
    { text: "Em vez de detalhes tecnicos sobre como funciona um dispositivo, explicar o proposito do dispositivo", correct: true },
    { text: "Um processo psicológico no qual indivíduos de meia-idade desenvolvem estratégias simplificadas para lidar com a sobrecarga cognitiva", correct: false }
  ]
},
]
const questionTres = [ {
  question: "Muitas pessoas de meia-idade tendem a se preocupar mais com questões de saúde, como doenças crônicas, controle de peso e saúde cardiovascular. Essa sitação representa:",
  answers: [
    { text: "Durante a meia-idade, há uma tendência a uma vigilância aumentada em relação à saúde, com um foco particular em condições crônicas", correct: false },
    { text: " No período intermediário da vida, é comum uma preocupação crescente com a saúde, especialmente no que diz respeito a controle de peso e bem-estar cardiovascular.", correct: false },
    { text: " homogeneidade. como alguns alguns comportamentos, condições e necessidades comuns podem ser observados em indivíduos de meia-idade", correct: true },
    { text: "Indivíduos na meia-idade muitas vezes intensificam sua atenção à saúde, priorizando o controle de doenças crônicas, manutenção do peso ideal e promoção da saúde cardiovascular.", correct: false }
  ]
},
{
  question: "Qual das seguintes condições de saúde é mais comum durante a meia-idade?",
  answers: [
    { text: "Sarampo", correct: false },
    { text: "Diabetes tipo 2", correct: true },
    { text: "Acne", correct: false },
    { text: "Catapora", correct: false }
  ]
},
{
  question: "Durante a meia-idade, qual das seguintes preocupações financeiras é mais comum para indivíduos nessa faixa etária?",
  answers: [
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Aumento da densidade óssea", correct: false },
    { text: "Perda de cabelo", correct: true }
  ]
},
{
  question: "Durante a meia-idade, quais desses fatores podem contribuir para um aumento do estresse?",
  answers: [
    { text: "Preocupações com a saúde dos pais idosos", correct: true },
    { text: "Redução das responsabilidades familiares", correct: false },
    { text: "Estabilidade financeira", correct: false },
    { text: "Melhoria na qualidade do sono", correct: false }
  ]
},
{
  question: "Qual é uma das principais preocupações financeiras durante a meia-idade?",
  answers: [
    { text: "Pagar pela faculdade dos filhos", correct: false },
    { text: "Planejar para a aposentadoria", correct: true },
    { text: "Comprar uma casa pela primeira vez", correct: false },
    { text: "Economizar para uma viagem de férias de luxo", correct: false }
  ]
},
]




const btnEviarNome = document.querySelector("#EnviarNome")
const nomeUm = document.querySelector("#nome1")
const nomeDois = document.querySelector("#nome2")
const form = document.querySelector("#form")
const conteiner = document.querySelector(".container") 
const quemComeca = document.querySelector("#quemComeca")
const equipeComeca = document.querySelector("#equipeComeca")
const divForm = document.querySelector(".letra")
const equipeResponde = document.querySelector("#equipeResponde")
const divRespode = document.querySelector(".nomesResponde")
const header = document.querySelector("header")

const pontosEquipeUm = document.querySelector("#pontosTime1")
const pontosEquipeDois = document.querySelector("#PontosTime2")

const nomeHeaderUm = document.querySelector("#nomeTime1")
const nomeHeaderDois = document.querySelector("#NomeTime2")

const selected  = document.querySelector("#perguntas")

const divGifs = document.querySelector(".gifs")
const srcGifs = document.querySelector("#srcGifs")

const ganhadorDiv = document.querySelector(".ganhador")
const ganhadorGif = document.querySelector("#ganhadorGif")

header.classList.add("hide")
btnEviarNome.addEventListener("click",(e)=>{
  e.preventDefault()
  let nomeEquipeUm = nomeUm.value
  let nomeEquipeDois = nomeDois.value
  divRespode.classList.add("hide")
  let selectedValue = selected.value
  
  

  nomeHEader(nomeEquipeUm,nomeEquipeDois)
  hide()
  play()
  

  $startGameButton.addEventListener("click", startGame)
  $nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  $answersContainer.classList.add("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (currentQuestionIndex === 5) {
    return finishGame()
  }

  
  if(selectedValue == "1"){
    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
  }else if(selectedValue =="2"){
    $questionText.textContent = questionDois[indexQuestionDois].question
    questionDois[indexQuestionDois].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
  }else if(selectedValue =="3"){
    $questionText.textContent = questionTres[indexQuestionTres].question
    questionTres[indexQuestionTres].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
  }
  
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }
  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
  divGifs.classList.add("hide")
  
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    pontuacao(nomeEquipeUm)
    pontuacaoGrupoDoiss(nomeEquipeDois)
    document.body.classList.add("correct")
    document.querySelectorAll(".answer").forEach(button => {
      if(button.dataset.correct){
        button.classList.add("correct")
      }else{
        button.classList.add("incorrect")
      }
      
      button.disabled = true
    })
  } else {
      perdePontoGrupoUm(nomeEquipeUm)
      perdePontoGrupoDois(nomeEquipeDois)

    document.body.classList.add("incorrect") 
    document.querySelectorAll(".answer").forEach(button => {
      if(!button.dataset.correct){
        button.classList.add("incorrect")
      }else{
        button.classList.add("correct")
      }
      button.disabled = true
    })
    

      if(equipeResponde.textContent == nomeEquipeUm){
        equipeResponde.textContent = nomeEquipeDois
      }else if (equipeResponde.textContent == nomeEquipeDois){
        equipeResponde.textContent = nomeEquipeUm
      }

  }
  
  currentQuestionIndex++
  indexQuestionDois++
  indexQuestionTres++
  $nextQuestionButton.classList.remove("hide")
  mostrarPontos()
  // document.querySelectorAll(".answer").forEach(button => {
  //   button.disabled = true
  //   if (button.dataset.correct) {
  //     button.classList.add("correct")
  //   } else {
  //     button.classList.add("incorrect")
  //   }
  // })
  
}


function finishGame() {
  
  
  if (pontuacaoGrupoDois>pontuacaoGrupoUm){
    gifGnanhador()
    $questionsContainer.innerHTML = 
    `
      <p class="final-message">
        Grupo <span>${nomeEquipeDois}</span> Ganhou!
        
      </p>
      

      <button 
        onclick=window.location.reload()
        class="button"
      >
        Reiniciar
      </button>
    `
  }else if(pontuacaoGrupoUm>pontuacaoGrupoDois){
    gifGnanhador()
    $questionsContainer.innerHTML = 
    `
      <p class="final-message">
        Grupo <span>${nomeEquipeUm}</span> Ganhou!
        
      </p>
      
      
      <button 
        onclick=window.location.reload()
        class="button"
      >
        Reiniciar
      </button>
    `
  }else if(pontuacaoGrupoUm==pontuacaoGrupoDois){
    empatar()
    $questionsContainer.innerHTML =  ` 
    <h1>EMPATE</h1>
    <p class="final-message">
      Nimguem Ganhou!
    </p>
    
    <button 
      onclick=window.location.reload()
      class="button"
    >
      Reiniciar
    </button>
  `
     
  }

 
}






  function play(){
    document.body.addEventListener("keyup",(e)=>{
      const EquipeStart = equipeComeca.value
      primeiraLetra(EquipeStart)
      e.preventDefault()
    })
  }
  function primeiraLetra(equipe){
    
    const letra = equipe[0]
    divForm.classList.add("hide")
    $answersContainer.classList.remove("hide")
    divRespode.classList.remove("hide")
    header.classList.remove("hide")
    verificar(letra)
  
  
  }
  function verificar (letra){
    if(letra == "a"){
      equipeResponde.textContent = `${nomeEquipeUm}`

    }else if (letra == "l"){
      equipeResponde.textContent = `${nomeEquipeDois}`
    }
    else{
      alert("digite apenas A ou L ")
    }
  }
  
  
  function pontuacao (nomeUm){
    if(equipeResponde.textContent == nomeUm){
      pontuacaoGrupoUm +=1
      verificarPontuacao()
    }
    
  }
  function pontuacaoGrupoDoiss(NomeDois){
    if( equipeResponde.textContent == NomeDois){
      pontuacaoGrupoDois +=1
      verificarPontuacaoDois()
    }
  }
  
})

function hide(){
  form.style.display = "none"
  conteiner.style.display = "flex"
}



function perdePontoGrupoUm (nome){
  if(equipeResponde.textContent == nome){
    if(pontuacaoGrupoUm > 0){
      pontuacaoGrupoUm --
    }
    verificarPerdePonto()
    
  }
}
function perdePontoGrupoDois(nome){
  if(equipeResponde.textContent == nome){
    if(pontuacaoGrupoDois > 0){
      pontuacaoGrupoDois --
    }
    verificarPerdePontoDois()
    
  }
} 

function mostrarPontos(){
  pontosEquipeUm.textContent = pontuacaoGrupoUm
  pontosEquipeDois.textContent = pontuacaoGrupoDois
}
function nomeHEader(nomeUm,nomeDois){
  nomeHeaderUm.textContent = nomeUm
  nomeHeaderDois.textContent = nomeDois
}

function verificarPontuacao(){
  if(ganhoDePonto == 0){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/dois.gif")
    ganhoDePonto++
  }
  else if(ganhoDePonto == 1){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/cris.gif")
    ganhoDePonto++
  }
  else if(ganhoDePonto == 2){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/dms.gif")
    ganhoDePonto++
  }
  else if(ganhoDePonto == 3){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/oloko.gif")
    ganhoDePonto++
  }
  else if(ganhoDePonto == 4){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/congratulations.gif")
    ganhoDePonto++
  }
}
function verificarPontuacaoDois(){
  if(ganhoDePontoDois == 0){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/congratulations.gif")
    ganhoDePontoDois++
  }
  else if(ganhoDePontoDois == 1){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/um.gif")
    ganhoDePontoDois++
  }
  else if(ganhoDePontoDois == 2){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/yeah.gif")
    ganhoDePontoDois++
  }
  else if(ganhoDePontoDois == 3){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/cris.gif")
    ganhoDePontoDois++
  }
  else if(ganhoDePontoDois == 4){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/congratulations.gif")
    ganhoDePontoDois++
  }
}
function verificarPerdePonto(){
  if(perdaDePonto == 0){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/err.gif")
    perdaDePonto++
  }else if(perdaDePonto == 1){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/bur.gif")
    perdaDePonto++
  }
  else if(perdaDePonto == 2){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/xii.gif")
    perdaDePonto++
  }
  else if(perdaDePonto == 3){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/choro.gif")
    perdaDePonto++
  }
  
  
}
function verificarPerdePontoDois(){
  if(perdaDePontoDois == 0){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/perde.gif")
    perdaDePontoDois++
  }else if(perdaDePontoDois == 1){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/rsrs.gif")
    perdaDePontoDois++
  }else if(perdaDePontoDois == 2){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/nao.gif")
    perdaDePontoDois++
  }else if(perdaDePontoDois == 3){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/xii.gif")
    perdaDePontoDois++
  }
}

function gifGnanhador(){
  if(randomNum == 0){
    divGifs.classList.remove("hide")
    ganhadorDiv.classList.remove("hide")
    ganhadorGif.setAttribute("src","gifs/estrelas2.gif")
    srcGifs.setAttribute("src","gifs/trofeu1.gif")
    
  }else if(randomNum == 1){
    divGifs.classList.remove("hide")
    ganhadorDiv.classList.remove("hide")
    ganhadorGif.setAttribute("src","gifs/winner3.gif")
    
    srcGifs.setAttribute("src","gifs/trofeu2.gif")
    
  }
  else if(randomNum == 2){
    divGifs.classList.remove("hide")
    ganhadorDiv.classList.remove("hide")
    ganhadorGif.setAttribute("src","gifs/estrelas.gif")
    srcGifs.setAttribute("src","gifs/trofeu3.gif")
    
  }
  else if(randomNum == 3){
    divGifs.classList.remove("hide")
    ganhadorDiv.classList.remove("hide")
    ganhadorGif.setAttribute("src","gifs/trofeu2.gif")
    srcGifs.setAttribute("src","gifs/estrelas.gif")
    
  }
}

function empatar(){
  divGifs.classList.remove("hide")
  srcGifs.setAttribute("src","gifs/empate.gif")
}








