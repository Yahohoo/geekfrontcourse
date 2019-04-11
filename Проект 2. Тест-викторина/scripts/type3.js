function functionForType3() {
    let color = generateColor();
    let res = [];
    task.question = "Что это за цвет?\n" + color;
    task.correctAnswer = color;
    document.getElementsByName("question")[0].innerHTML = "<h1>" + task.question + "</h1>";
    document.getElementsByName("answers")[0].innerHTML = "<ul><li name='color'></li><li name='color'></li><li name='color'></li><li name='color'></li></ul>";
    document.getElementsByName("answers")[0].style.textAlign = "center";
    let answers = [color, generateColor(), generateColor(), generateColor()];
    task.answers = answers.slice(0);
    let elements = document.getElementsByName("color");
    for (let i = 0; i < 4; i++) {
        let a = Math.floor(Math.random() * answers.length);
        let b = answers.splice(a, 1);
        elements[i].style.backgroundColor = b;
        res.push(b);
    }
    task.answers = res;
    document.getElementsByName("color")[0].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
        this.style.boxShadow = "0 0 0 3px #fff, 0 0 0 6px #ff8282";
        document.getElementsByName("color")[1].style.boxShadow = "";
        document.getElementsByName("color")[2].style.boxShadow = "";
        document.getElementsByName("color")[3].style.boxShadow = "";
    };
    document.getElementsByName("color")[1].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
        this.style.boxShadow = "0 0 0 3px #fff, 0 0 0 6px #ff8282";
        document.getElementsByName("color")[0].style.boxShadow = "";
        document.getElementsByName("color")[2].style.boxShadow = "";
        document.getElementsByName("color")[3].style.boxShadow = "";
    };
    document.getElementsByName("color")[2].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
        this.style.boxShadow = "0 0 0 3px #fff, 0 0 0 6px #ff8282";
        document.getElementsByName("color")[1].style.boxShadow = "";
        document.getElementsByName("color")[0].style.boxShadow = "";
        document.getElementsByName("color")[3].style.boxShadow = "";
    };
    document.getElementsByName("color")[3].onclick = function () {
        task.userAnswer = rgbToHash(this.style.backgroundColor);
        this.style.boxShadow = "0 0 0 3px #fff, 0 0 0 6px #ff8282";
        document.getElementsByName("color")[1].style.boxShadow = "";
        document.getElementsByName("color")[2].style.boxShadow = "";
        document.getElementsByName("color")[0].style.boxShadow = "";
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

function printingForThird(task ,results) {
    let html ="";
    html += '<article class="col-10 offset-1 align-items-center"><section name="question" class="card align-items-center"><h1>' + task.question + '</h1></section>';
    html += '<section name="answers" class="card" style="text-align:center;"><ul>';
    task.answers.forEach( function (quest) {
        if (isCorrect(quest, task.correctAnswer)) {
            html += "<li name='color' style='background-color: " + quest + "; box-shadow: 0 0 0 3px #fff, 0 0 0 6px #82ff9b;'>"
        } else {
            if (isCorrect(quest, task.userAnswer)){
                html += "<li name='color' style='margin: 10px; width: 100px; height: 100px; background-color: " + quest + "; box-shadow: 0 0 0 3px #fff, 0 0 0 6px #ff8282;'>"
            } else {
                html += "<li name='color' style='margin: 10px; width: 100px; height: 100px; background-color: " + quest + ";'>"
            }
        }
    });
    html += '</ul></section></article>';
    results.innerHTML+=html;
}