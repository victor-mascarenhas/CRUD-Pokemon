import styled from 'styled-components'
import LoginForm from '../../components/sign/formSignIn'
import history from '../../config/history'
import BaseLayout from '../../components/layout'
import { Button } from 'react-bootstrap'


const SignIn = () => {

    
    return (       
        <BaseLayout>       
                <LoginContainer>
                    <LoginForm />
                    <hr />
                    <br />
                    <Button
                        onClick={() => history.push('/signup')}
                        type="link"
                        block
                    >                        
                    Não tem cadastro? Cadastre-se!                        
                    </Button>                  

                </LoginContainer>
        </BaseLayout>
    );

};

export default SignIn

const LoginContainer = styled.div`
width: 100%;
height: 100%;

hr{
    display: block;
    margin-left: auto;
    margin-right: auto ; 
}
`

