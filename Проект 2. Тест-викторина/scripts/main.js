function read(){
    let types = [];
    let n = 0;
    for (i=1;i<=7;i++){
        let elem = document.getElementsByName(String(i))[0];
        console.log(elem);
        if (elem.checked){
            types.push(i);
        }
    }
    n = parseInt(document.getElementsByName('amount')[0].value,10);
    console.log(types,n)
    return types, n
}

let types = [];
let n = 0;
document.getElementsByName("submit")[0].onclick = function(){
    types, n = read();//считать данные о типах вопросов
}
let questions = form(types, n);//сформировать список вопросов
for (i=1;i<=n;i++){//повторять столько сколько вопросов
    let task = randomTask(questions, final);//выбрать вопрос из списка
    answer = askQuestion(task);//в зависимости от типа вызвать соответствующую функцию которая оформит интерфейс и считает ответ
    final = correct(answer, task, final);//записать корректность/некорректность ответа
}
results(final);//сформировать страницу результатов

//questions - массив с вопросами
//task - текущее задание
//answer - ответ данный пользователем
//final - список из вопросов и ответов пользователя
