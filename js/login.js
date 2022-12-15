class AdminPadrao {
    emailAdmin = "admin@gmail.com";
    senhaAdmin = "123456";
}

class UsuarioPadrao {
    emailUsuario = "user@gmail.com";
    senhaUsuario = "654321";

}

const adminPadrao = new AdminPadrao();
const userPadrao = new UsuarioPadrao();


const getObjeto = (id, mensagemDeErro) => {
    let objeto = document.getElementById(id);
    if (objeto === null) throw mensagemDeErro;
    return objeto;
}

const getEmail = () => {
    let email = document.getElementById('email').value;
    return email;
}

const getSenha = () => {
    let senha = document.getElementById('senha').value;
    return senha;
}


btnEntrar = getObjeto('btnEntrar', 'ERRO!');

const verificaSeAdminOuUser = (mensagemDeErro, msg) => {
    btnEntrar.addEventListener("click", () => {
        if (getEmail() == userPadrao.emailUsuario && getSenha() == userPadrao.senhaUsuario) {
            window.location = "inicio.html";

        } else if (getEmail() == adminPadrao.emailAdmin && getSenha() == adminPadrao.senhaAdmin) {
            window.location = "templates-base/table.html";
        } else {
            alertThrow(mensagemDeErro);

        }

    })
}

verificaSeAdminOuUser('E-mail ou senha invalidos!', 'Bem Vindo(a)!');



