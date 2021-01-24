import styled from 'styled-components'
import SignUpForm from '../../components/sign/formSignUp'
import history from '../../config/history'
import BaseLayout from '../../components/layout'
import { Button } from 'react-bootstrap'


const SignUp = () => {

    
    return (       
        <BaseLayout>       
                <LoginContainer>
                    <SignUpForm />
                    <hr />
                    <br />
                    <Button
                        onClick={() => history.push('/login')}
                        type="link"
                        block
                    >                        
                    Já possuí cadastro ? Faça login!                        
                    </Button>                  

                </LoginContainer>
        </BaseLayout>
    );

};

export default SignUp

const LoginContainer = styled.div`
width: 100%;
height: 100%;

hr{
    display: block;
    margin-left: auto;
    margin-right: auto ; 
}
`

