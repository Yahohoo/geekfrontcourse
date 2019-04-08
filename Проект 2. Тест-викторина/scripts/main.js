
let types = [];
let n = 0;
let final = [];
document.getElementsByName("submit")[0].onclick = function(){
    types, n = read();//считать данные о типах вопросов
    document.getElementsByName("main")[0].style.display = 'none';//скрыть главную страницу
    document.getElementsByName("task")[0].style.display = 'block';
    questions = form(types, n);//сформировать список вопросов
    if (n!=0){//повторять столько сколько вопросов
        task = randomTask();//выбрать вопрос из списка
        askQuestion();//в зависимости от типа вызвать соответствующую функцию которая оформит интерфейс и считает ответ
        //final = correct(answer, task);//записать корректность/некорректность ответа
        n--;
    }else{
        results(final);//сформировать страницу результатов
    }
//results(final);//сформировать страницу результатов
}

document.getElementsByName("submit")[1].onclick = function(){
    if (n!=0){
        task = randomTask();//выбрать вопрос из списка
        askQuestion();//в зависимости от типа вызвать соответствующую функцию которая оформит интерфейс и считает ответ
        //final = correct(answer, task);//записать корректность/некорректность ответа
        n--;
    }else{
        results(final);//сформировать страницу результатов
        console.log(final);
    }
//
}

//questions - массив с вопросами
//task - текущее задание
//answer - ответ данный пользователем
//final - список из вопросов и ответов пользователя

function form(types,n){
    let q = [[],[],[{type:3},{type:3},{type:3}],[],[],[],[]];
    let res = [];
    for (i=1;i<=n;i++){
        let a = Math.floor(Math.random() * types.length);
        let b = Math.floor(Math.random() * q[types[a]-1].length);
        res.push(q[types[a]-1][b]);
    }
    return res;
}

function results(final){
    document.getElementsByName("task")[0].style.display = 'none';
    document.getElementsByName("results")[0].style.display = 'block';
}

function read(){
    types=[];
    n = 0;
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
    let a = Math.floor(Math.random() * questions.length);
    let b = questions.splice(a,1)[0];
    final.push(b);
    return final[final.length-1];
}

function generateColor(){
    let s = '0123456789ABCDEF';
    let result = "#";
    for (i=1;i<=6;i++){
        result+=s[Math.floor(Math.random() * s.length)];
    }
    return result;
}

function rgbToHash(rgb){
    rgb = rgb.replace('rgb(','');
    rgb = rgb.replace(')','');
    let rgbArray = rgb.split(", ");
    let result = "#"+parseInt(rgbArray[0],10).toString(16)+parseInt(rgbArray[1]).toString(16)+parseInt(rgbArray[2]).toString(16);
    return result.toUpperCase();
}
function functionForType3(){
    let color = generateColor();
    task.question = "Что это за цвет?\n" + color; 
    task.correctAnswer = color;
    document.getElementsByName("question")[0].innerText = task.question;
    document.getElementsByName("answers")[0].innerHTML = "<ul><li name='color'></li><li name='color'></li><li name='color'></li><li name='color'></li></ul>";
    let answers = [color, generateColor(), generateColor(), generateColor()];
    task.answers = answers.slice(0);
    let elements = document.getElementsByName("color");
    for (i=0;i<4;i++){
        let a = Math.floor(Math.random() * answers.length);
        elements[i].style.backgroundColor = answers.splice(a,1);
        elements[i].style.width = '100px';
        elements[i].style.height = '100px';
    }
        document.getElementsByName("color")[0].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
        }
        document.getElementsByName("color")[1].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
        }
        document.getElementsByName("color")[2].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
        }
        document.getElementsByName("color")[3].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
        }
}

function askQuestion(){
    switch(task.type){
//        case 1:
//            var f = functionForType1; 
//            
//        case 2:
//            var f = functionForType2;
        
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