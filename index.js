import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Joana', 10000, 12345678900)
diretor.cadastarSenha('123456')
const gerente = new Gerente('Maria', 5000, 98765432100)
gerente.cadastarSenha('123')

const cliente = new Cliente('Lara', 85698745832, '456')

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123')
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456')

const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456')

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)
