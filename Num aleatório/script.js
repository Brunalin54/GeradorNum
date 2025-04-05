function geradorNumero() {
    
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;
    
   
    if (inicio === "" || fim === "") {
        document.getElementById("resultado").innerText = "Ops acho que faltou uma informação!";
        return;
    }

    // Convertendo os valores para numeros inteiros
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    
    // Verificando se o valor de "início" e menor "fim"
    if (inicio >= fim) {
        document.getElementById("resultado").innerText = "Acho que o valor de início deve ser menor que final hein, confere lá.";
        return;
    }

    // Gerando o número aleatório entre o intervalo
    let numeroAleatorio = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
    
    // Resultado
    document.getElementById("resultado").innerText = "Se número é: " + numeroAleatorio;
}
