const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let pontuacaoGrupoUm = 0
let pontuacaoGrupoDois=0





let currentQuestionIndex = 0
let indexQuestionDois = 0 


let perdaDePonto = 0
let perdaDePontoDois = 0
let ganhoDePonto = 0
let ganhoDePontoDois = 0


const questions = [
  {
    question: "Quais são algumas das mudanças físicas comuns que ocorrem durante a meia-idade?",
    answers: [
      { text: "Melhora na visão de perto", correct: false },
      { text: "Redução da capacidade auditiva", correct: false },
      { text: "Perda de cabelo", correct: true },
      { text: "Aumento da densidade óssea", correct: false }
    ]
  },
  {
    question: "Qual das seguintes mudanças pode ocorrer na vida social durante a meia-idade?",
    answers: [
      { text: "Maior envolvimento em atividades comunitárias", correct: true },
      { text: "Diminuição da necessidade de interação social", correct: false },
      { text: "Redução do contato com amigos e familiares", correct: false },
      { text: "Aumento da participação em festas e eventos sociais", correct: false }
    ]
  },
  {
    question: 'Qual das seguintes atividades pode ser benéfica para a saúde mental durante a meia-idade?',
    answers: [
      { text: 'Participação em grupos de apoio', correct: true },
      { text: 'Isolamento social', correct: false },
      { text: 'Prática regular de exercícios físicos intensos', correct: false },
      { text: "Ignorar sentimentos de tristeza e ansiedade", correct: false }
    ]
  },
  {
    question: 'Durante a meia-idade, qual das seguintes atividades pode ser benéfica para a saúde física?',
    answers: [
      { text: "Ficar sedentário por longos períodos", correct: false },
      { text: "Praticar exercícios de alta intensidade sem descanso", correct: false },
      { text: "Ignorar sinais de dor e desconforto", correct: false },
      { text: "Praticar atividades fisicas regularmente", correct: true }
    ]
  },
  {
    question: 'Durante a meia-idade, qual das seguintes opções é uma preocupação comum relacionada à saúde física??',
    answers: [
      { text: 'Aumento da massa muscula', correct: false },
      { text: 'Diminuição da flexibilidade', correct: true },
      { text: 'Melhoria da memória', correct: false },
      { text: 'Aumento da taxa metabólica', correct: false }
    ]
  }
]

const questionDois = [ {
  question: "Durante a meia-idade, qual desses fatores geralmente não contribui para mudanças emocionais?",
  answers: [
    { text: "Transição de carreira", correct: false },
    { text: "Início de novos relacionamentos amorosos", correct: false },
    { text: " Aumento da estabilidade financeira", correct: true },
    { text: "Vazio do ninho (filhos saindo de casa)", correct: false }
  ]
},
{
  question: "Qual das seguintes condições de saúde é mais comum durante a meia-idade?",
  answers: [
    { text: "Sarampo", correct: false },
    { text: "Acne", correct: false },
    { text: "Diabetes tipo 2", correct: true },
    { text: "Catapora", correct: false }
  ]
},
{
  question: "Durante a meia-idade, qual das seguintes preocupações financeiras é mais comum para indivíduos nessa faixa etária?",
  answers: [
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Perda de cabelo", correct: true },
    { text: "Aumento da densidade óssea", correct: false }
  ]
},
{
  question: "Durante a meia-idade, quais desses fatores podem contribuir para um aumento do estresse?",
  answers: [
    { text: "Redução das responsabilidades familiares", correct: false },
    { text: "Estabilidade financeira", correct: false },
    { text: "Preocupações com a saúde dos pais idosos", correct: true },
    { text: "Melhoria na qualidade do sono", correct: false }
  ]
},
{
  question: "Qual é uma das principais preocupações financeiras durante a meia-idade?",
  answers: [
    { text: "Pagar pela faculdade dos filhos", correct: false },
    { text: "Comprar uma casa pela primeira vez", correct: false },
    { text: "Planejar para a aposentadoria", correct: true },
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
    srcGifs.setAttribute("src","gifs/oloko.gif")
    ganhoDePonto++
  }
  else if(ganhoDePonto == 2){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/dms.gif")
    ganhoDePonto++
  }
  else if(ganhoDePonto == 3){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/cris.gif")
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
    srcGifs.setAttribute("src","gifs/cris.gif")
    ganhoDePontoDois++
  }
  else if(ganhoDePontoDois == 1){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/dms.gif")
    ganhoDePontoDois++
  }
  else if(ganhoDePontoDois == 2){
    divGifs.classList.remove("hide")
    srcGifs.setAttribute("src","gifs/um.gif")
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
  }
}










