function onClickSalvar() {

    var resp = document.getElementById('resp');
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var texto = '';


    if (documento.getElementById('soma').checked)
        texto = soma(num1, num2);
    if (documento.getElementById('subtracao').checked)
        texto = subtracao(num1, num2);
    if (document.getElementById('multiplicacao').checked)
        texto = multiplicacao(num1, num2);
    if (documento.getElementById('divisao').checked)
        texto = divisao(num1, num2);

    alert('resp');
  


    function soma(x, y) {

        return (x + y);
    }

    function subtracao(x, y) {

        return (x - y);


    }

    function multiplicacao(x, y) {

        return (x * y);


    }

    function divisao(x, y) {


        return (x / y);

    }

}