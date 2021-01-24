import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { createNewPoke, updatePokemon } from '../../store/pokemon/pokemon.action'
import { getAllTypes } from '../../store/types/types.action'
import { Button, Form } from 'react-bootstrap'
import {Link} from "react-router-dom";
import history from '../../config/history'



const CreatePoke = (props) => {

    const dispatch = useDispatch()
    const poke = useSelector((state) => state.pokemon.edit)
    const [form, setForm] = useState({
        ...poke
    })
    const allTypes = useSelector((state) => state.types.all)

    const isEdit = Object.keys(poke).length > 0
    const typeReq = (data) => isEdit ? dispatch(updatePokemon(poke._id, data)) : dispatch(createNewPoke(data))

    useEffect(() => {
        dispatch(getAllTypes())    
      }, [dispatch])

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
        history.push('/pokemons')
    }

    const validForm = () => form.name && form.pokedex && form.type1 && form.type2

    return (
        <FormCreate>
            {isEdit ? <h1> Editar Pokémon</h1> : <h1> Adicionar novo Pokémon</h1>}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Número Pokedex</Form.Label>
                    <Form.Control onChange={handleChange} value={form.pokedex || ""} name="pokedex" type="number" placeholder="Pokedex" />                    
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control onChange={handleChange} value={form.name || ""} name="name" type="text" placeholder="Nome" />                    
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Tipo Principal</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="type1" value={form.type1 || ""}>
                        <option disabled value=""> Selecione o tipo </option>
                        {allTypes.map((typ, i) => (
                            <option key={i} value={typ._id}>{typ.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Tipo Secundário</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="type2" value={form.type2 || ""}>
                        <option disabled value=""> Selecione o tipo </option>
                        {allTypes.map((typ, i) => (
                            <option key={i} value={typ._id}>{typ.name}</option>
                        ))}
                    </Form.Control>
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

export default CreatePoke

const FormCreate = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`