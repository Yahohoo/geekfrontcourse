let types = [],
 n = 0,
 final = [],
 task = {},
 questions = [];

document.getElementsByName("submit")[0].onclick = function () {
    read();//считать данные о типах вопросов
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

function results(final) {
    console.log(final);
    let windowForAllResults = document.getElementsByName("results")[0];
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
}

function randomTask() {
    let a = Math.floor(Math.random() * questions.length);
    return questions.splice(a, 1)[0];
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