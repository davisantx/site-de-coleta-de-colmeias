const verificaQuantidadeDeCaracteres = (valorId, numMinDeCaracteres, mensagemParaValorInvalido) => {
    if (valorId.length < numMinDeCaracteres) {
        alertThrow(mensagemParaValorInvalido);
    }
}
const verificaSeNomeEValido = () => {
    let nomeUser = pegarObjeto('nome', 'Elemento nome não encontrado');
    let btnCadastrar = pegarObjeto('btnCadastrar', 'Elemento botão não encontrado');
    btnCadastrar.addEventListener('click', () => {
        const nomeUsuario = nomeUser.value;
        verificaQuantidadeDeCaracteres(nomeUsuario, 3, 'Digite um nome válido');
        const nomeSobrenome = nomeUsuario.split(" ");
        verificaQuantidadeDeCaracteres(nomeSobrenome, 2, 'Digite o nome e o sobrenome');
        for (let i = 0; i < nomeSobrenome.length; ++i) {
            if (nomeSobrenome[i].length < 3) {
                alertThrow('Digite o nome e o sobrenome válidos');
            }
        }
        
    })
}

const verificaSeSenhaEValida = () => {
    let senha = pegarObjeto('senha', 'Elemento senha não encontrado')
    let btnCadastrar = pegarObjeto('btnCadastrar', 'Elemento botão não encontrado');
    btnCadastrar.addEventListener('click', () => {
        const senhaUsuario = senha.value;
        verificaQuantidadeDeCaracteres(senhaUsuario, 6, 'Digite uma senha válida');
    })
}

const verificaSeInformacoesDoUsuarioSaoValidas = () => {
    verificaSeNomeEValido();
    verificaSeSenhaEValida();
}


verificaSeInformacoesDoUsuarioSaoValidas();
removeMensagem();




