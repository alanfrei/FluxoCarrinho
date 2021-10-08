import {Link} from 'react-router-dom'
import {Container} from './styled'

export default function Produto(props){
    return(
        <Container>
            <img className="img-produto" src={props.info.imagem} alt=""/>
            <div className="titulo-produto">{props.info.titulo}</div>
            <div className="preco-produto">{props.info.preco}</div>
            
            <Link to={{
                pathname: '/detalhe',
                state: props.info
            }}>
                <button>Ver detalhes</button>
            </Link>
        </Container>
    )
}