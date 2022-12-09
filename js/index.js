const addTelaCadastro = () => {
   addElementoNaTela('.modal-cadastro');
   addElementoNaTela('.modal-container');
}
const exibeCadastro = () => {
    let btnCad = pegarObjeto('btnCad', 'Elemento botão não encontrado');
    btnCad.addEventListener('click', () => {
        addTelaCadastro();  
    })
}

exibeCadastro();
removeMensagem();
