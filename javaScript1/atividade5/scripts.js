let botao = document.getElementById('pressme');
botao.onclick = function(e){
    let form = document.myForm.myInput.value;
    document.myForm1.myInput.value = (form * form) * 3,14;
    document.myForm2.myInput.value = (form * 2) * 3,14;
}
