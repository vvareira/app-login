const usuarios = [
    {
        login : 'vanessa',
        senha : '123456'

    },

    {
        login : 'Slash',
        senha : '123456'
    },
    {
        login : 'Axl',
        senha: '123515'
    }

];


export function realizarLogin(login, senha){

    usuarios.forEach(function (usuario){
        if(usuario.login == login && usuario.senha == senha){

           return 'Logado com sucesso.';
        }
        

    });

    return 'Usuário não encontrado.';
}