const pegarObjeto = (id, mensagemDeErro) => {
    let objeto = document.getElementById(id);
    if (objeto === null) throw mensagemDeErro;
    return objeto;
}

const alertThrow = (alertTh) => {
    addMensagem(alertTh);
    throw alertTh;
}

const addElementoNaTela = (classDoElemento) => {
    document.querySelector(classDoElemento).style.display = 'flex';
}

const removeElementoDaTela= (idElemento, classDoElementoRemovido) => {
    let objeto = pegarObjeto(idElemento, 'Elemento botão não encontrado')
    objeto.addEventListener('click', () => {
        document.querySelector(classDoElementoRemovido).style.display = 'none';
    })

}

const addMensagem = (conteudoMensagem) => {
    document.getElementById('mensagem').innerHTML = conteudoMensagem;
    console.log(conteudoMensagem); 
    addElementoNaTela('.caixa');

}
const removeMensagem = () => {

    removeElementoDaTela('btnFecharCaixa', '.caixa');
    removeElementoDaTela('btnFecharTelaDeCadastro', '.modal-container');
}

