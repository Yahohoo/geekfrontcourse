function userAnswerToSecondType() {
    task.userAnswer = [];
    let answers = document.getElementsByClassName('answerForSecond');
    console.log(answers[0]);
    for (let i = 0; i < answers.length; i++){
        let isChecked = answers[i].querySelectorAll("input")[0];
        if(isChecked.checked){
            task.userAnswer.push(answers[i].querySelectorAll("span")[0].innerText);
        }
    }
}

function printingForSecond(task, results) {
    let html = "";
    html += '<article class="col-10 offset-1 align-items-center"><section name="question" class="card align-items-center"><h1>' + task.question + '</h1></section>';
    html += '<section name="answers" class="card"><ul>';
    task.answers.forEach( function (quest) {
        if (isCorrect(quest, task.userAnswer)) {
            if (isCorrect(quest, task.correctAnswer)){
                html += "<li class='answerForSecond'>" + "<input type='checkbox' checked disabled>" + "<span style='color: green'>" + quest + "</span>" + "</li>";
            } else {
                html += "<li class='answerForSecond'>" + "<input type='checkbox' checked disabled>" + "<span style='color: red'>" + quest + "</span>" + "</li>";
            }
        } else {
            if (isCorrect(quest, task.correctAnswer)){
                html += "<li class='answerForSecond'>" + "<input type='checkbox' disabled>" + "<span style='color: green'>" + quest + "</span>" + "</li>";
            } else {
                html += "<li class='answerForSecond'>" + "<input type='checkbox' disabled>" + "<span>" + quest + "</span>" + "</li>";
            }
        }
    });
    html += '</ul></section></article>';
    results.innerHTML+=html;
}

function functionForType2(){
    let windowForQuestion = document.getElementsByName("question")[0];
    windowForQuestion.innerHTML += '<h2>' + task.question + '</h2>';
    let windowForAnswers = document.getElementsByName("answers")[0];
    windowForAnswers.innerHTML += "<ul id='allAnswers'>";
    windowForAnswers.style.textAlign = "left";
    task.answers.forEach(function (quest) {
        windowForAnswers.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox'>" + "<span>" + quest + "</span>" + "</li>";
    });
    windowForAnswers.innerHTML += "</ul>";
}