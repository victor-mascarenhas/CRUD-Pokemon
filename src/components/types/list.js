import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypes, setType, deleteType } from '../../store/types/types.action'
import Modal from '../modal'
import Create from './create'
import Swal from 'sweetalert2'


const List = () => {


    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.types.all)
    const isAdmin = useSelector((state) => state.auth.user.admin)
    const [show, setShow] = useState(false); 
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        dispatch(getAllTypes())
        if (update) {
            setUpdate(false)
          }    
      }, [dispatch, update]) 

    const handleClose = () => {
        dispatch(setType({}))
        setShow(false);
    }  
    const handleSubmit = () => {
        dispatch(getAllTypes())
        handleClose()
        setUpdate(true) 
    }

    const isEdit = (props) => {
        dispatch(setType(props))
        setShow(true)
      }


      const delType = (props) => {  
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
            dispatch(deleteType(props._id))
            setTimeout(() => setUpdate(true), 500)
          }
          
        })
      }


    return (
        <Background>
            <Modal show={show} handleClose={handleClose} >
                <Create close={handleSubmit} />
            </Modal>
            <h1> Tipos Pokémon </h1>
            <NewTable striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cor</th>
                        { isAdmin && <th>Ações</th> }                        
                    </tr>
                </thead>
                <tbody>

                    {allTypes.map((typ, i) => (
                    <tr key={i}>
                        <td>{typ.name}</td>
                        <td>{typ.color}</td>
                        { isAdmin && <td> <Button onClick={() => isEdit(typ)}> Editar </Button> <NewButton onClick={() => delType(typ)}> Excluir </NewButton> </td> }
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

const NewTable = styled(Table)`
`