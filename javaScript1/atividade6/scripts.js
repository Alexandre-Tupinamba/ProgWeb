let barras = document.getElementsByClassName("barras");
let input = document.getElementsByTagName("input");
document.getElementById("botao").onclick = function () {
    for (let i = 0; i < input.length; i++){
        barras[i].style.setProperty("background-color", "red");
        barras[i].style.setProperty("height", `${input[i].value}px`);
        barras[i].style.setProperty("margin", "3px");
        barras[i].style.setProperty("width", `${input[input.length-1].value}px`);
    }
}