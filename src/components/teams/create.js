import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllPokes } from '../../store/pokemon/pokemon.action'
import { NewTeam, updateTeam } from '../../store/teams/teams.action'
import { Button, Form } from 'react-bootstrap'
import history from '../../config/history'



const CreateTeam = (props) => {

    const dispatch = useDispatch()
    const allPokes = useSelector((state) => state.pokemon.all)
    const team = useSelector((state) => state.teams.edit)
    const [form, setForm] = useState({
        ...team
    })
    
    const isEdit = Object.keys(team).length > 0
    const typeReq = (data) => isEdit ? dispatch(updateTeam(team._id, data)) : dispatch(NewTeam(data))

    useEffect(() => {
        dispatch(getAllPokes())    
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
        history.push('/')
    }

    const validForm = () => form.name && form.pokemon1 && form.pokemon2 && form.pokemon3 && form.pokemon4 && form.pokemon5 && form.pokemon6

    return (
        <FormCreate> 
            {isEdit ? <h1> Editar time</h1> : <h1> Criar novo time</h1>} 
            <Form>  
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control onChange={handleChange} value={form.name || ""} name="name" type="text" placeholder="Nome" />                    
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Pokémon 1</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="pokemon1" value={form.pokemon1 || ""}>
                        <option disabled value=""> Selecione o Pokémon </option>
                        {allPokes.map((pok, i) => (
                            <option key={i} value={pok._id}>{pok.pokedex}/{pok.name}/{pok.type1.name}/{pok.type2.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Pokémon 2</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="pokemon2" value={form.pokemon2 || ""}>
                        <option disabled value=""> Selecione o Pokémon </option>
                        {allPokes.map((pok, i) => (
                            <option key={i} value={pok._id}>{pok.pokedex}/{pok.name}/{pok.type1.name}/{pok.type2.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Pokémon 3</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="pokemon3" value={form.pokemon3 || ""}>
                        <option disabled value=""> Selecione o Pokémon </option>
                        {allPokes.map((pok, i) => (
                            <option key={i} value={pok._id}>{pok.pokedex}/{pok.name}/{pok.type1.name}/{pok.type2.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Pokémon 4</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="pokemon4" value={form.pokemon4 || ""}>
                        <option disabled value=""> Selecione o Pokémon </option>
                        {allPokes.map((pok, i) => (
                            <option key={i} value={pok._id}>{pok.pokedex}/{pok.name}/{pok.type1.name}/{pok.type2.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Pokémon 5</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="pokemon5" value={form.pokemon5 || ""}>
                        <option disabled value=""> Selecione o Pokémon </option>
                        {allPokes.map((pok, i) => (
                            <option key={i} value={pok._id}>{pok.pokedex}/{pok.name}/{pok.type1.name}/{pok.type2.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Selecionar Pokémon 6</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="pokemon6" value={form.pokemon6 || ""}>
                        <option disabled value=""> Selecione o Pokémon </option>
                        {allPokes.map((pok, i) => (
                            <option key={i} value={pok._id}>{pok.pokedex}/{pok.name}/{pok.type1.name}/{pok.type2.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>


                

                <Button disabled={!validForm()} onClick={submitForm} variant="primary" type="submit">
                    Enviar!
                </Button>
            </Form>
        </FormCreate>

    )
}

export default CreateTeam

const FormCreate = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`