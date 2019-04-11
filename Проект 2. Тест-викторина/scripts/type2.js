function userAnswerToSecondType() {
    task.userAnswer = [];
    let answers = document.getElementsByClassName('answerForSecond');
    console.log(answers[0]);
    for (let i = 0; i < answers.length; i++) {
        let isChecked = answers[i].querySelectorAll("input")[0];
        if (isChecked.checked) {
            task.userAnswer.push(answers[i].querySelectorAll("span")[0].innerText);
        }
    }
}

function generateHtmlForResultsOfSecond(ans, correct, checked) {
    let color = 'black';
    if (correct) {
        color = 'green';
    } else {
        if (checked) {
            color = 'red'
        }
    }
    return `<li class='answerForSecond'>
               <input type='checkbox' ${checked ? 'checked' : ''}  disabled>
               <span style='color: ${color}'>${ans}</span>
            </li>`
}

function printingForSecond(task, html) {
    task.answers.forEach(function (ans) {
        html += generateHtmlForResultsOfSecond(ans, isSubset(ans, task.correctAnswer), isSubset(ans, task.userAnswer));
    });
    return html
}

function functionForType2() {
    let windowForQuestion = document.getElementsByName("question")[0];
    windowForQuestion.innerHTML += '<h2>' + task.question + '</h2>';
    let windowForAnswers = document.getElementsByName("answers")[0];
    windowForAnswers.innerHTML += "<ul id='allAnswers'>";
    windowForAnswers.style.textAlign = "left";
    task.answers.forEach(function (quest) {
        windowForAnswers.innerHTML += `<li class='answerForSecond'>
                                            <input type='checkbox'>
                                            <span>${quest}</span> 
                                       </li>`;
    });
    windowForAnswers.innerHTML += "</ul>";
}