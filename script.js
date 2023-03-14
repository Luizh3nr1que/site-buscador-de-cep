function buscarCep() {
    let input = document.getElementById('cep').value

    if (input.length < 9) {
        alert("CEP inválido!");
        return;
    }

    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');

    ajax.send();

    ajax.onload = function () {


        let obj = JSON.parse(this.responseText);

        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let bairro = obj.bairro;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Rua: " + logradouro + "<br> Cidade: " + cidade + "<br> Bairro: " + bairro + "<br> Estado: " + estado;

        document.getElementsByClassName('limpa')[0].style.display = 'block';
    }
}

function limparMsg() {
    var limpar = document.getElementById('texto').innerHTML = "";
    document.getElementsByClassName('limpa')[0].style.display = 'none';

}