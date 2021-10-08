import { useState } from "react";
import computador from '../../assets/img/computador.webp'
import Produto from '../produto/index'


export default function Home(){
    const[ produtos, setProdutos] = useState([])
    function listar(){
        const r = [
            {
                id: 10001,
                imagem: {computador},
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 10001,
                imagem: {computador},
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 10001,
                imagem: {computador},
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            }
        ]
        setProdutos(r);
    }

    return(
        <div>
            <h1>Seja bem vindo</h1>
            <button onClick={listar}>listar</button>
            <div className="listaProdutos">
                {produtos.map(item =>
                    <Produto info={item}/>    
                )}
            </div>
        </div>
    )
}