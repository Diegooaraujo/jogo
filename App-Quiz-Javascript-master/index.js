const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let pontuacaoGrupoUm = 0
let pontuacaoGrupoDois=0

function randomNumber (){
  return Math.floor(Math.random()*6)
  
}
let NumRandom = randomNumber()
console.log(NumRandom)


let currentQuestionIndex = 0
let indexQuestionDois = 0 



const desafios = [{desafio:" Coloque músicas animadas e faça uma versão improvisada da dança das cadeiras, onde os alunos devem dançar ao redor das cadeiras enquanto a música toca e sentar quando ela parar"},
{ desafio: "Divida a turma em equipes e faça um jogo de mímica, onde cada equipe deve representar uma palavra ou frase engraçada sem usar palavras."
},{
  desafio:"Peça aos alunos para desenharem algo na lousa com os olhos vendados. Você pode dar instruções simples, como desenhar um animal, uma casa ou um rosto. O resultado geralmente é hilário e pode render boas risadas"
},{
  desafio:"Comece uma história engraçada e peça aos alunos para continuá-la, um por vez, adicionando um trecho cada um"
},{
  desafio:"Peça aos alunos para formarem duplas e criarem trajes improvisados usando papel, fita adesiva e outros materiais disponíveis na sala de aula."
},{
  desafio:"Divida a turma em grupos e peça a cada grupo para criar um trocadilho engraçado usando uma palavra específica que você fornecer. Depois, cada grupo deve apresentar seu trocadilho para a classe e ver quem consegue arrancar mais risadas."
}]
let challenge = desafios[NumRandom].desafio
console.log(challenge)

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
    question: "Como as questões de saúde mudam ou se tornam mais relevantes durante a meia-idade?",
    answers: [
      { text: "Aumento do risco de doenças cardíacas", correct: true },
      { text: "Diminuição do risco de osteoporose", correct: false },
      { text: "Redução do risco de diabetes tipo 2", correct: false },
      { text: "Melhora da função pulmonar", correct: false }
    ]
  },
  {
    question: 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"',
    answers: [
      { text: '<script src="xxx.js">', correct: true },
      { text: '<script href="xxx.js">', correct: false },
      { text: '<script name="xxx.js">', correct: false },
      { text: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: 'O arquivo JavaScript externo deve conter a tag <script>',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Como escrever "Hello World" numa caixa de alerta?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true },
      { text: 'msgBox("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false }
    ]
  }
]

const questionDois = [ {
  question: "Qual das seguintes preocupações é comum para muitas pessoas durante a meia-idade em relação aos pais idosos?",
  answers: [
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Perda de cabelo", correct: true },
    { text: "Aumento da densidade óssea", correct: false }
  ]
},
{
  question: "Durante a meia-idade, qual das seguintes atividades pode contribuir para a saúde física e mental?",
  answers: [
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Perda de cabelo", correct: true },
    { text: "Aumento da densidade óssea", correct: false }
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
  question: "Durante a meia-idade, qual das seguintes atividades pode ser benéfica para a saúde física?",
  answers: [
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Perda de cabelo", correct: true },
    { text: "Aumento da densidade óssea", correct: false }
  ]
},
{
  question: "Durante a meia-idade, qual é uma preocupação comum relacionada à vida profissional?",
  answers: [
    { text: "Melhora na visão de perto", correct: false },
    { text: "Redução da capacidade auditiva", correct: false },
    { text: "Perda de cabelo", correct: true },
    { text: "Aumento da densidade óssea", correct: false }
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

  console.log(selectedValue)
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
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    pontuacao(nomeEquipeUm)
    pontuacaoGrupoDoiss(nomeEquipeDois)

    document.body.classList.add("correct")
    document.querySelectorAll(".answer").forEach(button => {
      button.disabled = true
    })
    
    
    
  } else {
      perdePontoGrupoUm(nomeEquipeUm)
      perdePontoGrupoDois(nomeEquipeDois)

    document.body.classList.add("incorrect") 
    document.querySelectorAll(".answer").forEach(button => {
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
        Grupo ${nomeEquipeDois} Ganhou!
        
      </p>
      <p class="final-message">
        A equipe ${nomeEquipeUm} Tera que Pagar um DESAFIO!
      </p>
      <h1>DESAFIO</h1>
      <p class="final-message">
        "${challenge}
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
        Grupo ${nomeEquipeUm} Ganhou!
        
      </p>
      <p class="final-message">
        A equipe ${nomeEquipeDois} Tera que Pagar um DESAFIO!
      </p>
      <h1>DESAFIO</h1>
      <p class="final-message">
        "${challenge}
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
      Nimguem paga!
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
    }
    
  }
  function pontuacaoGrupoDoiss(NomeDois){
    if( equipeResponde.textContent == NomeDois){
      pontuacaoGrupoDois +=1
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
    
  }
}
function perdePontoGrupoDois(nome){
  if(equipeResponde.textContent == nome){
    if(pontuacaoGrupoDois > 0){
      pontuacaoGrupoDois --
    }
    
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









