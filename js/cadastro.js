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
        verificaQuantidadeDeCaracteres(senhaUsuario, 6, 'Email ou senha inválidos!');
    })
}

const verificaSeInformacoesDoUsuarioSaoValidas = () => {
    if (document.getElementById('nome').value.length < 2) {
        verificaSeNomeEValido();

    }
    verificaSeSenhaEValida();
}
'use strict';

const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('selected').value = '';
}

const preencherFormulario = (endereco) => {

    document.getElementById('rua').value = endereco.logradouro;

    var select = document.querySelector(".form-select");

    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text == endereco.bairro) {
            select.selectedIndex = i;

        } else {

        }

    }

}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('rua').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('rua').value = 'CEP incorreto!';
    }

}

const getEndereco = () => {
    let endereco = endereco.bairro;
    return endereco;
}

verificaSeInformacoesDoUsuarioSaoValidas();

document.getElementById('cep').addEventListener('focusout', pesquisarCep);



removeMensagem();



