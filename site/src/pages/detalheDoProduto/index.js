import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'


export default function VerDetalhes(props){
    const[produto, setProduto] = useState(props. location. state)
    const navegation = useHistory()



    return(
        <div>
            <div>
                <Link to='/'>
                    <button>Voltar</button>
                </Link>
                <h1>Detalhes do Produto</h1>
                <br/><br/>

                <div><img src={produto.imagem}/></div>
                <div> <h2>{produto.titulo}</h2> </div>
                <div> <h3>{produto.preco}</h3> </div>
            </div>

            <div>
                <div> <h2>Descrição</h2> </div>
                <div> {produto.descricao} </div>

                <div> <h2>Especificações</h2> </div>
                <div> {produto.especificacoes} </div>

                <button>Comprar</button>
            </div>

        </div>
    )
}