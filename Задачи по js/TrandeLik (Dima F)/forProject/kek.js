let  questionsForType2 = [["<h1>Гы гы вопросик</h1>", ["lol", "200IQ", "Гы гы", "бред"], ["lol", "200IQ", "Гы гы"]], ["<h1>Гы гы вопросик2</h1>", ["kek", "20IQ", "Гы"], ["kek", "20IQ"]]];
   button = document.getElementById("submit"),
   generate = document.getElementById("generate");

generate.onclick = function(){
    let randomIndex = Math.floor(Math.random() * (questionsForType2.length));
    let windowForQuestion = document.getElementById("question");
    windowForQuestion.innerHTML += questionsForType2[randomIndex][0];
    let windowForAnswers = document.getElementById("answers");
    windowForAnswers.innerHTML += "<ul id='allAnswers'>";
    questionsForType2[randomIndex][1].forEach(function (quest) {
        windowForAnswers.innerHTML += "<li class='answerForSecond'>" + "<input type='checkbox'>" + "<span>" + quest + "</span>" + "</li>";
    });
    windowForAnswers.innerHTML += "<il id='allAnswers'>";
};

button.onclick = function(){
    let correct =[];
    let answers = document.getElementsByClassName('answerForSecond');
    console.log(answers[0]);
    for (let i = 0; i < answers.length; i++){
        let isChecked = answers[i].querySelectorAll("input")[0];
        if(isChecked.checked){
            let usersAnswer = answers[i].querySelectorAll("span")[0].innerText;
            (a[2].indexOf(usersAnswer) !== -1) ? correct.push(true) : correct.push(false)
        }
    }
    (correct.indexOf(false) === -1) ? alert('Yep') : alert('Nope');
};