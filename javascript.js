// script.js
function calcularPensao() {
    const renda = document.getElementById('renda').value;
    const filhos = document.getElementById('filhos').value;

    const aviso = document.getElementById('aviso');
    aviso.innerText = '';  // Limpar aviso anterior

    if (renda === '' || filhos === '') {
        aviso.innerText = 'Por favor, preencha todos os campos.';
        return;
    }

    const rendaValue = parseFloat(renda);
    const filhosValue = parseInt(filhos);
    const percentual = 20; // Percentual fixo de 20%

    if (isNaN(rendaValue) || isNaN(filhosValue)) {
        aviso.innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const pensaoPorFilho = (rendaValue * percentual) / 100;
    const pensaoTotal = pensaoPorFilho * filhosValue;

    const resultadoText = `Valor da Pensão por Filho: R$ ${pensaoPorFilho.toFixed(2)}\nValor Total da Pensão: R$ ${pensaoTotal.toFixed(2)}`;
    document.getElementById('resultado').innerText = resultadoText;

    document.getElementById('salvarBtn').style.display = 'block';
}

function salvarResultado() {
    const resultado = document.getElementById('resultado').innerText;
    const blob = new Blob([resultado], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resultado_pensao.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
