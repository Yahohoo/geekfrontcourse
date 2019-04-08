let task = {type: 3};

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
            console.log(task);
        }
        document.getElementsByName("color")[1].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
            console.log(task);
        }
        document.getElementsByName("color")[2].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
            console.log(task);
        }
        document.getElementsByName("color")[3].onclick = function (){
            task.userAnswer = rgbToHash(this.style.backgroundColor);
            console.log(task);
        }
        document.getElementsByName("check")[0].onclick = function (){
            
        }
    console.log(task);
}

functionForType3();
console.log(task);