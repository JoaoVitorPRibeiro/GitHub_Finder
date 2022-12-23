import React from "react";
import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from "../components/User"
import Error from "../components/Error";

import { useState } from "react";

const Home = () => {
    //Salvar o estado do usuário
    const [user, setUser] = useState<UserProps | null>(null) //Ele começa nulo, mas ele pode receber o UserProps ou nulo
    const [error, setError] = useState(false)

    const loadUser = async(userName: string) => { //Para carregar o dado do usuario da API
        setError(false) //Para apagar a busca do usuario não encontrado, em uma segunda busca
        setUser(null) //Para apagar os dados do usuario encontrado, em uma segunda busca

        const res = await fetch(`https://api.github.com/users/${userName}`) //Pegando a resposta da API

        const data = await res.json() //To convertendo a resposta em json

        if(res.status === 404) {
            setError(true)
            return
        }

        const {avatar_url, login, location, followers, following} = data 

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }

        setUser(userData)
    }

    return  <div>
        <Search loadUser={loadUser} />
        {user && <User {...user} />}
        {error && <Error/>} 
    </div>
}

export default Home;