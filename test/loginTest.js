import { realizarLogin } from "../src/Login.js";
import assert from 'node:assert';

describe('Validar login', () => {
    it('Login válido', () => {
        const login = 'vanessa';
        const senha = '123456';

      const resultadoEsperado = realizarLogin(login, senha);


      assert.equal(resultadoEsperado, 'Logado com sucesso.')
        
    });


 it('Login inválido', () => {
        const login = 'teste';
        const senha = '123456';

      const resultadoEsperado = realizarLogin(login, senha);

      assert.equal(resultadoEsperado, 'Usuário não encontrado.')
        
    });


});