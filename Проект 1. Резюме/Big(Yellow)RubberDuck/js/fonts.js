var btn = document.getElementById("submit");
var body= document.getElementById("body");

btn.onclick = function () {
        let i = document.getElementById("font").options.selectedIndex;
        body.style.fontFamily = document.getElementById("font").options[i].text;
        i = document.getElementById("size").options.selectedIndex;
        console.log(i);
        body.style.fontSize = document.getElementById("size").options[i].text +'px';
};