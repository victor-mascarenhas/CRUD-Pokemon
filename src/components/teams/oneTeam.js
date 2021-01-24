import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokes } from '../../store/pokemon/pokemon.action'
import { getOne, deleteTeam, setTeam } from '../../store/teams/teams.action'
import { useParams, Link } from 'react-router-dom'
import Modal from '../modal'
import Create from './create'
import Swal from 'sweetalert2'



const OpenTeam = () => {

    const dispatch = useDispatch()
    const { teamId } = useParams()
    const [show, setShow] = useState(false); 
    const allPokes = useSelector((state) => state.pokemon.all)
    const team = useSelector((state) => state.teams.team)
    const loading = useSelector((state) => state.teams.loading)
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        dispatch(getAllPokes())
        dispatch(getOne(teamId))
    }, [dispatch, teamId])

    const tableFilter = () => {
        if (team) {
            const poke1 = allPokes.filter(item => item._id === team.pokemon1._id)
            const poke2 = allPokes.filter(item => item._id === team.pokemon2._id)
            const poke3 = allPokes.filter(item => item._id === team.pokemon3._id)
            const poke4 = allPokes.filter(item => item._id === team.pokemon4._id)
            const poke5 = allPokes.filter(item => item._id === team.pokemon5._id)
            const poke6 = allPokes.filter(item => item._id === team.pokemon6._id)

            return (
                <tbody>
                    {poke1.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pokedex}</td>
                            <td>{item.name}</td>
                            <td>{item.type1.name}</td>
                            <td>{item.type2.name}</td>
                        </tr>
                    ))}
                    {poke2.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pokedex}</td>
                            <td>{item.name}</td>
                            <td>{item.type1.name}</td>
                            <td>{item.type2.name}</td>
                        </tr>
                    ))}
                    {poke3.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pokedex}</td>
                            <td>{item.name}</td>
                            <td>{item.type1.name}</td>
                            <td>{item.type2.name}</td>
                        </tr>
                    ))}
                    {poke4.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pokedex}</td>
                            <td>{item.name}</td>
                            <td>{item.type1.name}</td>
                            <td>{item.type2.name}</td>
                        </tr>
                    ))}
                    {poke5.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pokedex}</td>
                            <td>{item.name}</td>
                            <td>{item.type1.name}</td>
                            <td>{item.type2.name}</td>
                        </tr>
                    ))}
                    {poke6.map((item, i) => (
                        <tr key={i}>
                            <td>{item.pokedex}</td>
                            <td>{item.name}</td>
                            <td>{item.type1.name}</td>
                            <td>{item.type2.name}</td>
                        </tr>
                    ))}
                </tbody>
            )
        }
    }
    
    const handleClose = () => {
        dispatch(setTeam({}))
        setShow(false);
    }  
    const handleSubmit = () => {
        handleClose()
    }

    const isEdit = (props) => {
        dispatch(setTeam(props))
        setShow(true)
      }

    const delTeam = (props) => {  
        Swal.fire({
          title: 'Você tem certeza?',
          text: "Você não poderá desfazer esta ação!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Excluir!'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteTeam(props._id))
          }
          
        })
      }

      const owner = () => {
        if (team.user) {
            let botao = team.user._id === user.id ? (<> <Button onClick={() => isEdit(team)}> Editar </Button> <NewButton onClick={() => delTeam(team)} > Excluir Time </NewButton> </>) : ""
            return botao
        }
    }

    return (
        <Background>
            <Modal show={show} handleClose={handleClose} >
                <Create close={handleSubmit} />
            </Modal>
            <h1> {team.name} </h1>
            <NewTable striped bordered hover>
                <thead>
                    <tr>
                        <th>Pokedex</th>
                        <th>Nome</th>
                        <th>Tipo Principal</th>
                        <th>Tipo Secundario</th>
                    </tr>
                </thead>
                {loading ? <h1> Carregando </h1> : tableFilter()}
            </NewTable>
            {owner()}
            <hr/>
            <Link to="/">
                <Button type="primary">
                    Voltar
                </Button>
            </Link>
        </Background>
    )
}

export default OpenTeam


const Background = styled.div`
width: 100%;
height: 100%;
`
const NewButton = styled(Button)`
background-color: red !important;
`

const NewTable = styled(Table)`
`