function removeSelectionLines(currentIndex, arrayOfOptions, numberOfQuestions) {
    task.userAnswer = rgbToHash(arrayOfOptions[currentIndex].style.backgroundColor);
    arrayOfOptions[currentIndex].style.boxShadow = "0 0 0 3px #fff, 0 0 0 6px blue";
    for (let i = 0; i < numberOfQuestions; i++){
        if (i !== currentIndex){
            document.getElementsByName("color")[i].style.boxShadow = "";
        }
    }
}

function functionForType3() {
    let color = generateColor();
    let res = [];
    let numberOfQuestions = 4;
    task.question = "Что это за цвет?\n" + color;
    task.correctAnswer = color;
    document.getElementsByName("question")[0].innerHTML = "<h1>" + task.question + "</h1>";
    document.getElementsByName("answers")[0].innerHTML = "<ul>";
    for (let i = 0; i < numberOfQuestions; i++){
        document.getElementsByName("answers")[0].innerHTML += '<li name="color"></li>'
    }
    document.getElementsByName("answers")[0].innerHTML +=    "</ul>";
    document.getElementsByName("answers")[0].style.textAlign = "center";
    let answers = [color];
    for (let i = 1; i < numberOfQuestions; i++){
        answers.push(generateColor())
    }
    task.answers = answers.slice(0);
    let elements = document.getElementsByName("color");
    for (let i = 0; i < numberOfQuestions; i++) {
        let a = Math.floor(Math.random() * answers.length);
        let b = answers.splice(a, 1);
        elements[i].style.backgroundColor = b;
        res.push(b);
    }
    task.answers = res;
    let arrayOfOptions = document.getElementsByName("color");
    for (let i = 0; i < numberOfQuestions; i++){
        arrayOfOptions[i].onclick = function (){removeSelectionLines(i, arrayOfOptions, numberOfQuestions)};
    }
}

function rgbToHash(rgb) {
    rgb = rgb.replace('rgb(', '');
    rgb = rgb.replace(')', '');
    let rgbArray = rgb.split(", ");
    let result = "#" + parseInt(rgbArray[0], 10).toString(16) + parseInt(rgbArray[1]).toString(16) + parseInt(rgbArray[2]).toString(16);
    return result.toUpperCase();
}

function generateColor() {
    let s = '0123456789ABCDEF';
    let result = "#";
    for (let i = 1; i <= 6; i++) {
        result += s[Math.floor(Math.random() * s.length)];
    }
    return result;
}

function generateHtmlForResultsOfThird(answer, correct, checked) {
    let color = 'white';
    if (correct) {
        color = '#82ff9b';
    } else {
        if (checked) {
            color = '#ff8282'
        }
    }
    return `<li name='color' style='background-color: ${answer}; box-shadow: 0 0 0 3px #fff, 0 0 0 6px ${color};'>`
}

function printingForThird(task , html) {
    task.answers.forEach( function (ans) {
        html += generateHtmlForResultsOfThird(ans, isSubset(ans, task.correctAnswer), isSubset(ans, task.userAnswer))
    });
    return html
}