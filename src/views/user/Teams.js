import {Route} from "react-router-dom";
import BaseLayout from '../../components/layout/'
import Create from '../../components/teams/create'
import Open from '../../components/teams/oneTeam'
import List from '../../components/teams/list'


const MenuTeams = [
    
    {
        name: "Time detalhado",
        path: 'team/open/:teamId',
        component: () => <Open/>
    },
    {
        name: "Criar Time",
        path: 'team/create',
        component: () => <Create/>
    },
    {
        name: "Lista de Times",
        path: '/',
        component: () => <List/>
    }
]



const Teams = (props) => {

    return (
        <BaseLayout >
            {MenuTeams.map((item, i) => (
                <Route key={i} exact path={props.match.path + item.path} component={item.component} />
            ))}
        </BaseLayout>
    )
}

export default Teams

