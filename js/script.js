// Imagens de acordo com o IMC
const imagens = {
    'Abaixo do peso': 'img/pesobaixo.png',
    'Peso normal': 'img/pesonormal.png',
    'Sobrepeso': 'img/sobrepeso.png',
    'Obesidade I': 'img/obesidade1.png',
    'Obesidade II': 'img/obesidade2.png',
    'Obesidade III': 'img/obesidade3.png'
};

// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada!');

    const btnCalcular = document.getElementById('btnCalcular');
    const btnRecalcular = document.getElementById('btnRecalcular');
    const resultadoDiv = document.getElementById('resultado');
    const formContainer = document.getElementById('formContainer');

    // Botão Calcular
    btnCalcular.addEventListener('click', function () {
        console.log('Botão calcular clicado!');
        calcularIMC();
    });

    // Botão Recalcular
    btnRecalcular.addEventListener('click', function () {
        console.log('Botão recalcular clicado!');
        resultadoDiv.classList.add('hidden');
        formContainer.style.display = 'block';
    });

    function calcularIMC() {
        // Obter valores
        const sexo = document.getElementById('sexo').value;
        const idade = document.getElementById('idade').value;
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;

        console.log('Valores:', { sexo, idade, altura, peso });

        // Validar campos
        if (!sexo || !idade || !altura || !peso) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Calcular IMC
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);

        console.log('IMC calculado:', imc);

        // Classificar IMC
        let classificacao;

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else if (imc < 35) {
            classificacao = "Obesidade I";
        } else if (imc < 40) {
            classificacao = "Obesidade II";
        } else {
            classificacao = "Obesidade III";
        }

        // Exibir resultado
        exibirResultado(imc, classificacao, alturaMetros);
    }

    function exibirResultado(imc, classificacao, alturaMetros) {
        const silhuetaImg = document.getElementById('silhueta');
        const valorImc = document.getElementById('valorImc');
        const classificacaoP = document.getElementById('classificacao');
        const faixaPeso = document.getElementById('faixaPeso');

        console.log('Exibindo resultado...');

        // Atualizar imagem
        silhuetaImg.src = imagens[classificacao];

        // Atualizar textos
        valorImc.textContent = `IMC: ${imc.toFixed(1)}`;
        classificacaoP.textContent = classificacao;
        classificacaoP.className = 'classificacao';

        // Calcular peso ideal
        const pesoMinimo = (18.5 * alturaMetros * alturaMetros).toFixed(1);
        const pesoMaximo = (24.9 * alturaMetros * alturaMetros).toFixed(1);
        faixaPeso.textContent = `Peso ideal: ${pesoMinimo}kg - ${pesoMaximo}kg`;

        // Mostrar resultado e esconder formulário
        formContainer.style.display = 'none';
        resultadoDiv.classList.remove('hidden');

        console.log('Resultado exibido com sucesso!');
    }
});