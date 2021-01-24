import {Route} from "react-router-dom";
import BaseLayout from '../../components/layout/'
import CreatePokemons from '../../components/pokemon/create'
import CreateTypes from '../../components/types/create'
import Admin from './admin'


const MenuAdmin = [
    
    {
        name: "Criar Tipo",
        path: '/types/create',
        component: () => <CreateTypes/>
    },
    {
        name: "Criar Pokemon",
        path: '/pokemons/create',
        component: () => <CreatePokemons/>
    },
    {
        name: "Admin Buttons",
        path: '/',
        component: () => <Admin/>
    }
]



const AdminRoutes = (props) => {

    return (
        <BaseLayout >
            {MenuAdmin.map((item, i) => (
                <Route key={i} exact path={props.match.path + item.path} component={item.component} />
            ))}
        </BaseLayout>
    )
}

export default AdminRoutes

