type SearchProps = {
    loadUser: (userName: string) => Promise <void>
}

import { useState, KeyboardEvent } from "react";

import {BsSearch} from 'react-icons/bs'

import classes from './Search.module.css'

const Search = ({loadUser}: SearchProps) => {
const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => { //Funcionalidade para pesquisar quando o usuário apertar enter
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

    return(
        <div className={classes.search} >
            <h2> Busque por um usuário: </h2>
            <p> Conheça seus melhores repositórios </p>
            <div className={classes.search_container} >
                <input type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUserName(e.target.value)} //Quando o usuário digitar nesse campo, quero pegar esse dado e salvar no setUserName 
                onKeyDown={handleKeyDown} //Para pegar o movimento de apertar enter
                />
                <button onClick={() => loadUser(userName)}/* Hora que o usuário clicar, quero carregar o loadUser com os dados do userName*/>  
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search