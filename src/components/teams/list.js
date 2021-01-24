import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '../../store/teams/teams.action'
import history from '../../config/history'


const ListTeams = () => {


    const dispatch = useDispatch()
    const allTeams = useSelector((state) => state.teams.all)

    useEffect(() => {
        dispatch(getTeams())    
      }, [dispatch]) 

    const forward = (props) => {
        history.push(`/team/open/${props}`)
    }


    return (
        <Background>
            <NewTable striped bordered hover  >
                <thead>
                    <tr> 
                        <th>Nome do Time</th>   
                        <th>Criado por</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {allTeams.map((tea, i) => (
                    <tr key={i}>                        
                        <td>{tea.name}</td>
                        <td>{tea.user.name}</td>
                        <td><Button onClick={() => forward(tea._id)}>Visualizar</Button></td>
                    </tr>
                    ))}                   


                </tbody>
            </NewTable>
        </Background>
    )
}

export default ListTeams

const Background = styled.div`
width: 100%;
height: 100%;
`

const NewTable = styled(Table)`
`