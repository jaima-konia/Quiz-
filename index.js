const startBtn = document.getElementById('start-btn')
const restartbtn = document.getElementById('restart-quiz')
const currentQstnNmbr = document.getElementById('current-qstn')
const totalQstnNmbr = document.getElementById('total-qstn')
const scoreSpan = document.getElementById('score')
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const progress = document.getElementById('progress')
const questionText = document.getElementById('question-text')
const answerContainer = document.getElementById('answers-container')
const resultScreen = document.getElementById('quiz-results')
const finalScore = document.getElementById('final-score')
const maxScore = document.getElementById('max-score')
const resultMessage = document.getElementById('result-msg')


const quizQuestions = [
  {
    question: "What is the capital of Bangladesh?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Dhaka", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msg('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true },
      { text: "alertBox('Hello World')", correct: false },
      { text: "msgBox('Hello World')", correct: false },
    ],
  },
  {
    question: "How many legs does a butterfly have?",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "6", correct: true },
    ],
  },
  {
    question: "Smallest ocean is?",
    answers: [
      { text: "Atlantic", correct: false },
      { text: "Arctic", correct: true },
      { text: "New zealand", correct: false },
      { text: "Dead sea", correct: false },
    ],
  },
  {
    question: "Which metal is heavier?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Silver", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Lithium", correct: false },
    ],
  },
]

startBtn.addEventListener('click',startQuiz)
restartbtn.addEventListener('click',restartQuiz)
totalQstnNmbr.textContent = quizQuestions.length
maxScore.textContent = quizQuestions.length

let currentQuestionIndex = 0
let score = 0
let answerDisabled = false

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    scoreSpan.textContent = 0

    startScreen.classList.remove('active')
    quizScreen.classList.add('active')



    showQuestion()
}

function showQuestion(){
    answerDisabled = false
    let currentQuestion = quizQuestions[currentQuestionIndex]
    currentQstnNmbr.textContent = currentQuestionIndex+1

    questionText.textContent = currentQuestion.question

    let progressPercent = (currentQuestionIndex/quizQuestions.length)*100
    progress.style.width = progressPercent+"%"

    answerContainer.innerHTML = ""

    currentQuestion.answers.forEach((answer)=>{
         let button = document.createElement('button')
         button.textContent=answer.text
         button.classList.add('answer-btn')
         button.dataset.correct = answer.correct

         button.addEventListener('click',selectAnswer)
        answerContainer.appendChild(button)


    })



}

function selectAnswer(event){
    if(answerDisabled)
        return

    answerDisabled = true

    let selectedAns = event.target

    let isTrue = selectedAns.dataset.correct === 'true'

    Array.from(answerContainer.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add('correct')
        }
        else if(button === selectedAns)
        {
            button.classList.add('incorrect')
        }
    })

    if(isTrue)
    {
        score++
        scoreSpan.textContent = score
    }

    setTimeout(()=>{
        currentQuestionIndex++
        if(currentQuestionIndex< quizQuestions.length)
        {
            showQuestion()
        }
        else{
            showResults()
        }
        
    },1000)

}

function showResults(){
    quizScreen.classList.remove('active')
     resultScreen.classList.add('active')

     finalScore.textContent = score
     let percentage = (score/quizQuestions.length)*100

     if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}



function restartQuiz(){
    resultScreen.classList.remove('active')
    startQuiz()
}