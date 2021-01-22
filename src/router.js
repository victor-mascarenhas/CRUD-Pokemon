import { Route, Router, Switch} from 'react-router-dom'
import history from './config/history'

//Views
import PokemonList from './views/Pokemons'



const Routers = () => (
    <Router history={history}>
        <Switch>                
        <Route exact path="/" component={PokemonList} />      
        </Switch>
    </Router>
)

export default Routers;