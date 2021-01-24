import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { createNewType, updateType } from '../../store/types/types.action'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import history from '../../config/history'



const CreateType = (props) => {

    const dispatch = useDispatch()
    const type = useSelector((state) => state.types.edit)
    const [form, setForm] = useState({
        ...type
    })

    const isEdit = Object.keys(type).length > 0
    const typeReq = (data) => isEdit ? dispatch(updateType(type._id, data)) : dispatch(createNewType(data))

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        typeReq(form);
        setForm({})
        if(isEdit){
        setTimeout(() => props.close(), 500) 
    }
        history.push('/types')
    }

    const validForm = () => form.name && form.color


    return (
        <FormCreate>
            {isEdit ? <h1> Editar tipo</h1> : <h1> Criar novo tipo</h1>} 
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control onChange={handleChange} value={form.name || ""} name="name" type="text" placeholder="Nome" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecione uma cor</Form.Label>
                    <Form.Control type="color" id="color" name="color" value={form.color || ""} onChange={handleChange} />
                </Form.Group>


                <Button disabled={!validForm()} onClick={submitForm} variant="primary" type="submit">
                    Enviar!
                </Button>
                <hr/>
                <Link to="/admin">
                    <Button >
                        Voltar
                    </Button>
                </Link>
            </Form>



        </FormCreate>

    )
}

export default CreateType

const FormCreate = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`