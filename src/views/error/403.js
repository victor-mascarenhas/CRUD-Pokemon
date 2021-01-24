import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Error403 = () => {
    
    return (
        <Background>
            <Content>
                <h1> Erro 403 </h1>
                <h2> Acesso Negado! </h2>
                <Link to="/">
                <Button type="primary">
                Voltar para página principal
                </Button>
                </Link>
            </Content>
        </Background>
    )
}

export default Error403


const Background = styled.div`
background-color: #a52320;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Content = styled.div`
color: white;
`