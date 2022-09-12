const quizData = [
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheet",
    b: "Creative Style Sheet",
    c: "Computer Style Sheet",
    d: "Color Style Sheet",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Markup Leveler",
    correct: "c",
  },
  {
    question:
      "Which of the following is the correct way of making a string in Java?",
    a: 'String "Text";',
    b: "String text = 'text';",
    c: 'String text = "text";',
    d: 'String text = "text"',
    correct: "d",
  },
  {
    question: "what does ++ mean?",
    a: "minus 1",
    b: "add 1",
    c: "add 2",
    d: "multiply 2",
    correct: "b",
  },
  {
    question: "What year was Java invented?",
    a: "1982",
    b: "2004",
    c: "1997",
    d: "1995",
    correct: "d",
  }
];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    localStorage.saveData = JSON.stringify(score)
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="document.location='highscore.html'">Save Score</button>
            `
    }
  }
})


//getting the currentTime
//endTime = currentTime + 20 sec
//looping until that endTime is reached
