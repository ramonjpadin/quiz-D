const username = document.querySelector('username')
const saveScoreBtn = document.querySelector('saveScoreBtn')
const finalScore = document.querySelector('finalScore')
const mostRecentScore = document.querySelector('currentQuiz')

const highScores = JSON.parse(localStorage.getItem('score')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = score();

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

highScores = e => {
    e.preventDefault()

    const score = {
        score: highScores,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign
}