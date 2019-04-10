let types = [],
 n = 0,
 final = [];

document.getElementsByName("submit")[0].onclick = function () {
    types, n = read();//считать данные о типах вопросов
    document.getElementsByName("main")[0].style.display = 'none';//скрыть главную страницу
    document.getElementsByName("task")[0].style.display = 'block';
    questions = form(types, n);//сформировать список вопросов
    if (n !== 0) {//повторять столько сколько вопросов
        task = randomTask();//выбрать вопрос из списка
        askQuestion();//в зависимости от типа вызвать соответствующую функцию которая оформит интерфейс и считает ответ
        //final = correct(answer, task);//записать корректность/некорректность ответа
        n--;
    } else {
        results(final);//сформировать страницу результатов
    }
//results(final);//сформировать страницу результатов
};

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

document.getElementsByName("check")[0].onclick = function () {
    if (n !== 0) {
        if (task.type === 2){userAnswerToSecondType()}
        final.push(task);
        let windowForQuestion = document.getElementsByName("question")[0];
        windowForQuestion.innerHTML = '';
        let windowForAnswers = document.getElementsByName("answers")[0];
        windowForAnswers.innerHTML = '';
        console.log(final);
        task = randomTask();//выбрать вопрос из списка
        askQuestion();//в зависимости от типа вызвать соответствующую функцию которая оформит интерфейс и считает ответ
        //final = correct(answer, task);//записать корректность/некорректность ответа
        n--;
    } else {
        if (task.type === 2){userAnswerToSecondType()}
        final.push(task);
        results(final);//сформировать страницу результатов
        console.log(final);
    }
};

//questions - массив с вопросами
//task - текущее задание
//answer - ответ данный пользователем
//final - список из вопросов и ответов пользователя

function isCorrect(ans, correct) {
    return correct.indexOf(ans) !== -1;
}

function form(types, n) {
    let q = [[], [{type: 2, question: 'Гы гы вопросик', answers: ["lol", "200IQ", "Гы гы", "бред"], correctAnswer: ["lol", "200IQ", "Гы гы"]}, {type: 2, question: 'Гы гы вопросик2', answers: ["kek", "20IQ", "Гы гы"], correctAnswer: ["kek", "20IQ"]}], [{type: 3}], [], [], [], []];
    let res = [];
    for (let i = 1; i <= n; i++) {
        let a = Math.floor(Math.random() * types.length);
        let b = Math.floor(Math.random() * q[types[a] - 1].length);
        let newQuestion = {};
        newQuestion.type = types[a];
        newQuestion.question = q[types[a] - 1][b].question;
        newQuestion.answers = q[types[a] - 1][b].answers;
        newQuestion.correctAnswer = q[types[a] - 1][b].correctAnswer;
        res.push(newQuestion);
    }
    return res;
}

function printingForSecond(task, results) {
    results.innerHTML += '<h1>' + task.question + '</h1>';
    results.innerHTML += '<ul>';
    task.answers.forEach( function (quest) {
        if (isCorrect(quest, task.userAnswer)) {
            if (isCorrect(quest, task.correctAnswer)){
                results.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox' checked disabled>" + "<span style='background-color: green'>" + quest + "</span>" + "</li>";
            } else {
                results.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox' checked disabled>" + "<span style='background-color: red'>" + quest + "</span>" + "</li>";
            }
        } else {
            if (isCorrect(quest, task.correctAnswer)){
                results.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox' disabled>" + "<span style='background-color: green'>" + quest + "</span>" + "</li>";
            } else {
                results.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox' disabled>" + "<span>" + quest + "</span>" + "</li>";
            }
        }
    });
    results.innerHTML += '</ul>';
}

function printingForThird(task ,results) {
    results.innerHTML += '<h1>' + task.question + '</h1>';
    results.innerHTML += '<ul>';
    task.answers.forEach( function (quest) {
        if (isCorrect(quest, task.correctAnswer)) {
            results.innerHTML += "<li name='color' style='margin: 10px; width: 100px; height: 100px; background-color: " + quest + "; box-shadow: 0 0 0 3px #fff, 0 0 0 6px green;'>"
        } else {
            if (isCorrect(quest, task.userAnswer)){
                results.innerHTML += "<li name='color' style='margin: 10px; width: 100px; height: 100px; background-color: " + quest + "; box-shadow: 0 0 0 3px #fff, 0 0 0 6px red;'>"
            } else {
                results.innerHTML += "<li name='color' style='margin: 10px; width: 100px; height: 100px; background-color: " + quest + ";'>"
            }
        }
    });
    results.innerHTML += '</ul>';
}

function results(final) {
    console.log(final);
    let windowForAllResults = document.getElementsByName("results")[0]
    windowForAllResults.innerHTML = '';
    final.forEach(function (task) {
        windowForAllResults.innerHTML += '<section>';
        switch (task.type) {
            case 2:
                printingForSecond(task, windowForAllResults);
                break;
            case 3:
                printingForThird(task, windowForAllResults);
                break;
        }
        windowForAllResults.innerHTML += '</section>';
    });
    document.getElementsByName("task")[0].style.display = 'none';
    document.getElementsByName("results")[0].style.display = 'block';
}

function read() {
    types = [];
    n = 0;
    for (let i = 1; i <= 7; i++) {
        let elem = document.getElementsByName(String(i))[0];
        if (elem.checked) { types.push(i); }
    }
    n = parseInt(document.getElementsByName('amount')[0].value, 10);
    return types, n
}

function randomTask() {
    let a = Math.floor(Math.random() * questions.length);
    let b = questions.splice(a, 1)[0];
    return b;
}

function generateColor() {
    let s = '0123456789ABCDEF';
    let result = "#";
    for (let i = 1; i <= 6; i++) {
        result += s[Math.floor(Math.random() * s.length)];
    }
    return result;
}

function rgbToHash(rgb) {
    rgb = rgb.replace('rgb(', '');
    rgb = rgb.replace(')', '');
    let rgbArray = rgb.split(", ");
    let result = "#" + parseInt(rgbArray[0], 10).toString(16) + parseInt(rgbArray[1]).toString(16) + parseInt(rgbArray[2]).toString(16);
    return result.toUpperCase();
}

function functionForType3() {
    let color = generateColor();
    task.question = "Что это за цвет?\n" + color;
    task.correctAnswer = color;
    document.getElementsByName("question")[0].innerText = task.question;
    document.getElementsByName("answers")[0].innerHTML = "<ul><li name='color'></li><li name='color'></li><li name='color'></li><li name='color'></li></ul>";
    let answers = [color, generateColor(), generateColor(), generateColor()];
    task.answers = answers.slice(0);
    let elements = document.getElementsByName("color");
    for (let i = 0; i < 4; i++) {
        let a = Math.floor(Math.random() * answers.length);
        elements[i].style.backgroundColor = answers.splice(a, 1);
        elements[i].style.width = '100px';
        elements[i].style.height = '100px';
    }
    document.getElementsByName("color")[0].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
    };
    document.getElementsByName("color")[1].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
    };
    document.getElementsByName("color")[2].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
    };
    document.getElementsByName("color")[3].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
    }
}

function functionForType2(){
    let windowForQuestion = document.getElementsByName("question")[0];
    windowForQuestion.innerHTML += '<h2>' + task.question + '</h2>';
    let windowForAnswers = document.getElementsByName("answers")[0];
    windowForAnswers.innerHTML += "<ul id='allAnswers'>";
    task.answers.forEach(function (quest) {
        windowForAnswers.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox'>" + "<span>" + quest + "</span>" + "</li>";
    });
    windowForAnswers.innerHTML += "</ul>";
}

function askQuestion() {
    switch (task.type) {
//        case 1:
//            var f = functionForType1;
//
        case 2:
            var f = functionForType2;
            break;

        case 3:
            var f = functionForType3;

//        case 4:
//            var f = functionForType4;

//        case 5:
//            var f = functionForType5;

//        case 6:
//            var f = functionForType6;

//        case 7:
//            var f = functionForType7;
    }
    return f();
}