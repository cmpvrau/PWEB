        var nome = prompt("Digite seu nome:");
        var nota1 = parseFloat(prompt("Digite a nota 1:"));
        var nota2 = parseFloat(prompt("Digite a nota 2:"));
        var nota3 = parseFloat(prompt("Digite a nota 3:"));

        var media = (nota1 + nota2 + nota3)/3;
        alert(nome + ' sua média é ' + media.toFixed(2));
