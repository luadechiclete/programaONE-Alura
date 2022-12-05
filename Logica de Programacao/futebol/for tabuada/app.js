function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var tabuada = parseInt(prompt("Qual tabuada você quer exibir?"));

for(var multiplicador = 1; multiplicador <= 10; multiplicador++) {

    mostra(tabuada * multiplicador);
}

mostra("FIM");