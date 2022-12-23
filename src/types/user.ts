//Para não ter que ficar criando em vários cantos as propriedades do tipo usuário, cria aqui e exporta

export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number,
}