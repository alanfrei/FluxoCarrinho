import { useState } from "react";
import Produto from '../produto/index'


export default function Home(){
    const[ produtos, setProdutos] = useState([])
    function listar(){
        const r = [
            {
                id: 10001,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 10002,
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                titulo: "Poltrona Gamer",
                preco: "R$ 1.350,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 10001,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
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