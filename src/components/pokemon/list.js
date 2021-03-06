import { Table, Button} from 'react-bootstrap'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokes, setPokemon, deletePokemon } from '../../store/pokemon/pokemon.action'
import Modal from '../modal'
import Create from './create'
import Swal from 'sweetalert2'


const List = () => {


    const dispatch = useDispatch()
    const [show, setShow] = useState(false); 
    const [update, setUpdate] = useState(false)
    const allPokes = useSelector((state) => state.pokemon.all)
    const isAdmin = useSelector((state) => state.auth.user.admin)

    useEffect(() => {
        dispatch(getAllPokes()) 
        if (update) {
            setUpdate(false)
          }       
      }, [dispatch, update])

    const handleClose = () => {
        dispatch(setPokemon({}))
        setShow(false);
    }  
    const handleSubmit = () => {
        dispatch(getAllPokes())
        handleClose()
        setUpdate(true) 
    }

    const isEdit = (props) => {
        dispatch(setPokemon(props))
        setShow(true)
      }


      const delpoke = (props) => {  
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
            dispatch(deletePokemon(props._id))
            setTimeout(() => setUpdate(true), 500)
          }
          
        })
      }
 



    return (
        <Background>
            <Modal show={show} handleClose={handleClose} >
                <Create close={handleSubmit} />
            </Modal>
            <NewTable striped bordered hover>
                <thead>
                    <tr>
                        <th>Pokedex</th>
                        <th>Nome</th>
                        <th>Tipo Principal</th>
                        <th>Tipo Secundario</th>
                        { isAdmin && <th>Ações</th> }
                    </tr>
                </thead>
                <tbody>

                    {allPokes.map((pok, i) => (
                    <tr key={i}>
                        <td>{pok.pokedex}</td>
                        <td>{pok.name}</td>
                        <NewTd color={pok.type1.color}>{pok.type1.name}</NewTd>
                        <NewTd color={pok.type2.color}>{pok.type2.name}</NewTd>
                        { isAdmin && <td> <Button onClick={() => isEdit(pok)}> Editar </Button> <NewButton onClick={() => delpoke(pok)}> Excluir </NewButton> </td> }
                    </tr>
                    ))}

                </tbody>
            </NewTable>
        </Background>
    )
}

export default List

const Background = styled.div`
width: 100%;
height: 100%;
`
const NewButton = styled(Button)`
background-color: red !important;
`
const NewTd = styled.td`
color: ${props => props.color};
`

const NewTable = styled(Table)`
`