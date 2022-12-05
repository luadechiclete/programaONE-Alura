function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o numero de vitórias"));
var empates = parseInt(prompt("Entre com o numero de empates."));

var pontos = vitorias * 3 + empates;

mostra("Os pontos do seu time é " + pontos);

if(pontos > 28) {

    mostra("Seu time está melhor que o ano passado");

}

if(pontos < 28) {

    mostra("Seu time está pior que o ano passado");

}

if(pontos == 28) {

    mostra("Seu time está igual ao ano passado");

}

mostra("FIM");