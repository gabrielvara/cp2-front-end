
function clickSim() {
    window.location.href = "login.html";
}

function clickNao() {
    window.location.href = "https://www.youtube.com/@luccastoon";
}

function clickLogin() {
    var erro = document.getElementById("erro");
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (usuario == "1234" && senha == "1234" ){
        window.location.href = "index.html";
    }
    else {
        erro.innerText = "Usuário ou Senha incorretos, Tente novamente";
    }
}

function comprarvinho1() {
    window.location.href = "vinho-faisán-merlot-2022.html";
}

function comprarvinho2() {
    window.location.href = "vinho-paine-merlot-2023.html";
}

function comprarvinho3() {
    window.location.href = "vinho-finca-traversa-cabernet-sauvignon-2022.html";
}

function sugestao() {
    window.location.href = "index.html#sugestaovinhos";
}

function enviarformulario() {
    alert("Mensagem enviada com sucesso! Retornaremos o mais rápido possivel");
}

function comprarvinho() {
    var valorFinal = document.getElementById("valorTotalVinho").innerText;
    alert(`Itens no valor de ${valorFinal} adicionados ao carrinho com sucesso!`);
}

function atualizarpreco() {
    var qtdGarrafas = document.getElementById("inputqtd").value;
    var valorFinal = document.getElementById("valorTotalVinho");
    var valorGarrafa = document.getElementById("valorTotalVinho").innerText;
    valorGarrafa = valorGarrafa.replace("R$", "");

    var total = parseFloat(valorGarrafa) * qtdGarrafas;

    valorFinal.innerText = `R$${total.toFixed(2)}`;
}

function aplicarcupom() {
    var valorFinal = document.getElementById("valorTotalVinho").innerText;
    valorFinal = valorFinal.replace("R$", "");
    var cupom = document.getElementById("inputcupom").value;
    paragrafocupom = document.getElementById("paragrafocupom");
    valorTotal = 0;

    if (cupom == "FIAP2024") {
        valorTotal = parseFloat(valorFinal) - (parseFloat(valorFinal) * 0.1);
        valorFinal = document.getElementById("valorTotalVinho");
        valorFinal.innerText = `R$${valorTotal.toFixed(2)}`;
        paragrafocupom.innerText = "Cupom Aplicado com sucesso!";
    }

    else {
        paragrafocupom.innerText = "Cupom Inválido!";
    }
    
}

function visualizarsugestao() {
    var selecao = document.getElementById("selecaovinhos")
    var valor = selecao.value
    var campoResposta = document.getElementById("resultsugest")

    if (valor == "vinho-faisan") {
        campoResposta.innerText = "Harmonização: O Merlot geralmente possui notas de frutas vermelhas maduras, taninos suaves e corpo médio. Ele combina bem com pratos de carne vermelha magra, aves e massas com molhos à base de tomate. \n\n Receita sugerida: Um Risoto de cogumelos, especialmente se preparado com cogumelos como shiitake ou porcini, complementaria os sabores do Faisán Merlot. O risoto é cremoso e rico, o que ressalta a suavidade deste vinho. Além disso, o sabor dos cogumelos se harmoniza perfeitamente com as notas frutadas do Merlot."
    }
    else if  (valor == "vinho-paine") {
        campoResposta.innerText = "Harmonização: O Merlot da região de Paine, provavelmente, compartilha características semelhantes ao Faisán Merlot, com ênfase em frutas maduras e taninos suaves. Portanto, também combinará bem com pratos de carne vermelha, aves e massas. \n\n Receita sugerida: Um pato assado com molho de laranja seria uma excelente escolha. O sabor rico da carne de pato complementa os taninos suaves do Merlot, enquanto o molho de laranja adiciona um toque cítrico que destaca as notas frutadas do vinho."
    }
    else if (valor == "vinho-finca-traversa") {
        campoResposta.innerText = "Harmonização: Cabernet Sauvignon geralmente é mais encorpado e possui taninos mais pronunciados, com notas de frutas escuras e especiarias. Combina bem com carnes vermelhas grelhadas, queijos maduros e pratos ricos em sabores. \n\n Receita sugerida: Um bife grelhado ao molho de pimenta verde seria uma excelente escolha para harmonizar com o Finca Traversa Cabernet Sauvignon. O sabor intenso da carne grelhada complementa os taninos e o corpo robusto do vinho, enquanto o molho de pimenta verde adiciona uma nota picante que realça as características frutadas e picantes do Cabernet Sauvignon."
    }
    else {
        campoResposta.innerText = "Valor inválido"
    }
}
