var btn = document.getElementById("submit");
var body= document.getElementById("body");

btn.onclick = function () {
        var selind = document.getElementById("font").options.selectedIndex;
        console.log(selind);
        body.style.fontFamily = document.getElementById("font").options[selind].text;

};