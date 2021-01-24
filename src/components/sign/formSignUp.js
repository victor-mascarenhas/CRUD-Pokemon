import { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { signUp } from '../../store/sign/action.sign'
import { Button, Form } from 'react-bootstrap'



const SignUpForm = () => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(signUp(form));
    }


    return (
        <FormLogin>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control onChange={handleChange} value={form.name || ""} name="name" type="text" placeholder="Seu nome" />                    
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Endereço de E-mail</Form.Label>
                    <Form.Control onChange={handleChange} value={form.email || ""} name="email" type="email" placeholder="Seu e-mail" />                    
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control onChange={handleChange} value={form.password || ""} name="password" type="password" placeholder="Sua senha" />
                </Form.Group>

                <Button onClick={submitForm} variant="primary" type="submit">
                    Enviar!
                </Button>
            </Form>
        </FormLogin>

    )
}

export default SignUpForm

const FormLogin = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`