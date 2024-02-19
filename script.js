function toggleDetalhe(summary) {
    var detalhe = summary.nextElementSibling;

    // Verifica se o detalhe clicado está atualmente aberto
    var isAberto = detalhe.hasAttribute('open');

    // Fecha todos os detalhes, exceto o atual
    var detalhes = document.querySelectorAll('.container-perguntas details');
    detalhes.forEach(function(outroDetalhe) {
        if (outroDetalhe !== detalhe) {
            outroDetalhe.removeAttribute('open');
        }
    });

    // Se o detalhe clicado já estiver aberto, fecha-o
    if (isAberto) {
        detalhe.removeAttribute('open');
    } else {
        // Abre o detalhe clicado
        detalhe.setAttribute('open', true);
    }

    // Adiciona um ouvinte de evento de clique ao detalhe para fechá-lo se clicado novamente
    detalhe.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o contêiner
        if (detalhe.hasAttribute('open')) {
            detalhe.removeAttribute('open');
        }
    });
}
