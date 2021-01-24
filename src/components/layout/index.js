import styled from 'styled-components'
import logo from '../../assets/images/pokemon-logo-5.png'
import { Link } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../config/auth'
import { useSelector } from 'react-redux'


const BaseLayout = ({ children }) => {

    const isAdmin = useSelector((state) => state.auth.user.admin)

    const HandleLogout = () => {
        removeToken();
      }

    return (
        <Layout>
            <Main>
                <Box>
                    <Dashboard>
                        <User>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </User>                        
                        <Options>
                        <Link to="/team/create">
                            <h2> Criar time </h2>
                        </Link>
                        </Options>
                        <Options>
                        <Link to="/">
                            <h2> Todos os times </h2>
                        </Link>
                        </Options>
                        <Options>
                            <Link to="/pokemons">
                            <h2> Todos os Pokemons </h2>
                            </Link>
                        </Options>
                        
                        { isAdmin && <Options>
                            <Link to="/admin">
                            <h2> Admin </h2>
                            </Link>
                            </Options>}
                        {
                            isAuthenticated() ?
                                <Options>
                                    <Link  onClick={HandleLogout} to="/">
                                        <h2> Sair </h2>
                                    </Link>
                                </Options>
                                : <Options>
                                    <Link to="/login">
                                        <h2> Login </h2>
                                    </Link>
                                </Options>
                        }
                    </Dashboard>
                    <Display>
                        <Content>
                            {children}
                        </Content>
                    </Display>
                </Box>
            </Main>
        </Layout>
    )
}

export default BaseLayout

const Layout = styled.div`
`
const Main = styled.div`
background-color: #a52320;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Box = styled.div`
background: white;
min-height: 80vh;
width: 60%;
background: linear-gradient( 
  to right bottom,
  rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)); 
border-radius: 2rem; 
backdrop-filter: blur(2rem);
display: flex;
`

const Dashboard = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
text-align: center;
background: linear-gradient( 
  to right bottom,
  rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  border-radius: 2rem; 
`
const User = styled.div`
`
const Options = styled.div`
display: flex;
margin: 2rem 0rem;
padding: 1rem 5rem;
align-items: center;
h2{
  padding: 0rem 2rem;
}
`
const Display = styled.div`
flex: 2; 
margin: 5rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;
position: relative;
`
const Content = styled.div`
margin-bottom: 3rem;
display: flex;
margin: 2rem 0rem;
padding: 2rem;
justify-content: center;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient( 
  to right bottom,
  rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  border-radius: 2rem; 
  overflow: auto;
`

/* const Content = styled.div`
margin-bottom: 3rem;
display: flex;
background: linear-gradient(
  to left top,
  rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  justify-content: center;
` */