function adicionarNomes() {
    var nomes = document.getElementById("novoNome").value.split("\n");
    var nomesValidos = nomes.filter(nome => nome.trim() !== "");

    if (nomesValidos.length > 0) {
        var nomesLista = document.getElementById("nomes");

        nomesValidos.forEach(nome => {
            var li = document.createElement("li");
            li.textContent = nome.trim();
            li.style.opacity = "0"; // Adiciona opacidade inicial
            nomesLista.appendChild(li);

            // Animação de fadeIn
            setTimeout(function() {
                li.style.opacity = "1";
            }, 100);

            // Adiciona evento de hover para destacar os nomes
            li.addEventListener("mouseover", function() {
                this.style.backgroundColor = "#0056b3";
                this.style.color = "#fff";
            });

            li.addEventListener("mouseout", function() {
                this.style.backgroundColor = "#007bff";
                this.style.color = "#fff";
            });
        });

        document.getElementById("novoNome").value = ""; // Limpa o campo de entrada
    }
}

function sortear() {
    var numGanhadores = parseInt(document.getElementById("numGanhadores").value);
    var nomes = document.querySelectorAll("#nomes li");
    
    if (numGanhadores <= nomes.length) {
        var ganhadores = [];

        while (ganhadores.length < numGanhadores) {
            var indiceSorteado = Math.floor(Math.random() * nomes.length);
            var nomeSorteado = nomes[indiceSorteado].textContent;

            if (!ganhadores.includes(nomeSorteado)) {
                ganhadores.push(nomeSorteado);
            }
        }

        alert("Ganhadores: " + ganhadores.join(", "));
    } else {
        alert("O número de ganhadores não pode ser maior do que o número de nomes disponíveis.");
    }
}
