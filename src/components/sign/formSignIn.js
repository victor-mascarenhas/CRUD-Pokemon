import { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { signIn } from '../../store/sign/action.sign'
import { Button, Form } from 'react-bootstrap'



const LoginForm = () => {

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
        dispatch(signIn(form));
    }


    return (
        <FormLogin>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Endereço de E-mail</Form.Label>
                    <Form.Control onChange={handleChange} value={form.email || ""} name="email" type="email" placeholder="Seu e-mail" />                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control onChange={handleChange} value={form.password || ""} name="password" type="password" placeholder="Sua senha" />
                </Form.Group>
                <Button onClick={submitForm} variant="primary" type="submit">
                    Entrar!
                </Button>
            </Form>
        </FormLogin>

    )
}

export default LoginForm

const FormLogin = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`