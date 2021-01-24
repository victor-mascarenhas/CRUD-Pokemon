import { Route, Router, Switch, Redirect} from 'react-router-dom'
import { isAuthenticated } from './config/auth'
import history from './config/history'
import { useSelector } from 'react-redux'

//Views
import PokemonList from './views/user/Pokemons'
import TypesList from './views/user/Types'
import Teams from './views/user/Teams'
import Admin from './views/admin/'
import Signin from './views/sign/signin'
import SignUp from './views/sign/signup'

//Error
import Error404 from './views/error/404'
import Error403 from './views/error/403'

const AuthRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
} 

const AdminRoute = ({ ...rest }) => {
    const isAdmin = useSelector((state) => state.auth.user.admin)
        if (!isAdmin) {
            return <Redirect to='/403' />
        }
        return <Route {...rest} />
    } 

const Routers = () => (
    <Router history={history}>
        <Switch>
        <Route exact path="/signup" component={SignUp} />                
        <Route exact path="/login" component={Signin} /> 
        <AdminRoute path="/admin" component={Admin} />       
        
        <AuthRoute exact path="/types" component={TypesList} />   
        <AuthRoute exact path="/pokemons" component={PokemonList} />
        <AuthRoute path="/" component={Teams} />  

        <Route exact path="/403" component={Error403}/>
        <Route path="*" component={Error404}/>     
        </Switch>
    </Router>
)

export default Routers;