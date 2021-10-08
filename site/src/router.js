
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/home/index'
import VerDetalhes from './pages/detalheDoProduto/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/detalhe" exact={true} component={VerDetalhes}/>
            </Switch>
        </BrowserRouter>
    )
}