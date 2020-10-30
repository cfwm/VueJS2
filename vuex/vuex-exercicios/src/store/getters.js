//Neste arquivo irmão de Store podem ser declarados state. getters, mutations ou actions que possuem dados e métodos mais gerais.
//Esta maneira de declarar state, getters, mutations ou actions faz a mesma coisa que o sistema de módulos, mas de uma forma diferente e é recomendada para armazenar dados e métodos mais gerais.
export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + state.sobrenome  