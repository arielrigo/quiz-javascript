const quesArea = document.querySelector('.questionArea')
const ques = document.querySelector('.question')
const opt = document.querySelector('.options')
let index = 0
let questionIndex = 0
let lista = []
let progrs = 10
let moreprogrs = 10
let i = 0
let correctanswers = 0

function StartGame() {
    document.querySelector('.questionArea').style.display = 'block'
    document.querySelector('.scoreArea').style.display = 'none'

    showQuestionScreen()

}



function showQuestionScreen() {
    destroyButtons()
    let currentQuestion = questions[questionIndex]
    ques.innerHTML = currentQuestion.question
    const answer = currentQuestion.answer
    currentQuestion.options.forEach((option, index) => {
        const button = createButton(option, index, answer)
    })
}

function createButton(option, buttonIndex, answer) {

    const btn = document.createElement('button')
    btn.innerHTML = option
    btn.setAttribute('data-op', `${buttonIndex}`)
    btn.setAttribute('class', 'option')
    document.querySelector('.options').appendChild(btn)
    btn.addEventListener('click', function() {
        progress()
        answerIsCorrect(buttonIndex, answer)
        StopIndex()

        showQuestionScreen()
    })

    return btn


}

function answerIsCorrect(chosenAnswer, correctAnswer) {
    if (chosenAnswer === correctAnswer) {
        correctanswers++



    }
}

function destroyButtons() {
    document.querySelectorAll('.option').forEach((item) => {
        item.remove()
    })
}

function StopIndex() {

    if (questions[questionIndex].question === 'Como o loop while começa?') {
        winGame()
    } else {
        questionIndex++
    }

}

function progress() {
    let opti = document.querySelectorAll('.option')
    opti.forEach(() => {
        index++

    })
    if (index >= 1) {
        document.querySelector('.progress--bar').style.width = `${progrs}%`

    }
    progrs = progrs + moreprogrs
}

function winGame() {

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    if (correctanswers < 4) {
        document.querySelector('.scorePct').style.color = '#FF0000'
        document.querySelector('.scoreText1').innerHTML = 'Muito burro filho KKKK'
    }



    document.querySelector('.scorePct').innerHTML = `Acertou ${correctanswers}`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu 9 questões e acertou ${correctanswers}.`


    document.querySelector('.backButton').addEventListener('click', () => {
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.scoreArea').style.display = 'none';
        questionIndex = 0
        correctanswers = 0
        index = 0
        progrs = 10
        document.querySelector('.progress--bar').style.width = `${index}%`
        StartGame()
    })
}

window.addEventListener('load', StartGame)