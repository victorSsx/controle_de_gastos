//saldo
//descricao
//valor
//tipo
//adicionar
//lista-transacoes

let descricoes = [];

document.getElementById('adicionar').addEventListener('click', () => {
    const descricao = document.getElementById('descricao').value.trim();
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    if (descricao && !isNaN(valor)){
        const transacao = {descricao, valor, tipo};
        descricoes.push(transacao);
        atualizarLista();
        atualizarSaldo();

        // limpar os campos de entrada após adicionar
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
    };
});

// função para atualizar a lista de transações
function atualizarLista() {
    const lista = document.getElementById('lista-transacoes');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    descricoes.forEach((t, index) => {
        const li = document.createElement("li"); // Cria um novo elemento de lista
        li.classList.add(t.tipo); // Adiciona a classe do tipo de transação
        // Define o conteúdo do item da lista com a descrição, valor e um botão para remover
        li.innerHTML = `${t.descricao} - R$ ${t.valor.toFixed(2).replace('.',',')}
        <button onclick="removerTransacao(${index})">Remover</button>`;
        lista.appendChild(li);
    });
};

// função para atualizar o saldo
function atualizarSaldo() {
    let saldo = 0; // Inicializa o saldo
    // Percorre todas as transações e calcula o saldo
    descricoes.forEach(t => {
        saldo += t.tipo === 'receita' ? t.valor : -t.valor;
    });
    // Atualiza o elemento HTML que exibe o saldo
    document.getElementById('saldo').innerHTML = `R$ ${saldo.toFixed(2).replace('.',',')}`;
};