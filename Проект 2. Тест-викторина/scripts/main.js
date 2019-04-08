function read(){
    let types = [];
    let n = 0;
    for (i=1;i<=7;i++){
        let elem = document.getElementsByName(String(i))[0];
        if (elem.checked){
            types.push(i);
        }
    }
    n = parseInt(document.getElementsByName('amount')[0].value,10);
    return types, n
}

function randomTask(){
    let a = Math.floor(Math.random() * length(questions));
    final.push(questions.splice(a,1));
    return final[length(final)-1];
}


function askQuestion(task){
    switch(task.type){
        case 1:
            var f = functionForType1; 
            
        case 2:
            var f = functionForType2;
        
        case 3:
            var f = functionForType3;

        case 4:
            var f = functionForType4;

        case 5:
            var f = functionForType5;

        case 6:
            var f = functionForType6;

        case 7:
            var f = functionForType7;
    } 
    return f();
}

let types = [];
let n = 0;
document.getElementsByName("submit")[0].onclick = function(){
    types, n = read();//считать данные о типах вопросов
    document.getElementsByName("main")[0].style.display = 'none';//скрыть главную страницу
    document.getElementsByName("task")[0].style.display = 'block';
}
let questions = form(types, n);//сформировать список вопросов
for (i=1;i<=n;i++){//повторять столько сколько вопросов
    let task = randomTask();//выбрать вопрос из списка
    answer = askQuestion();//в зависимости от типа вызвать соответствующую функцию которая оформит интерфейс и считает ответ
    final = correct(answer, task);//записать корректность/некорректность ответа
}
results(final);//сформировать страницу результатов

//questions - массив с вопросами
//task - текущее задание
//answer - ответ данный пользователем
//final - список из вопросов и ответов пользователя
