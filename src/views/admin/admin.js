import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


const Pokemons = () => {

  return (
    <Wrapper>
    <Link to="/types">
    <Button >    
        Todos os tipos    
    </Button>
    </Link>
    <Link to="/pokemons">
    <Button >    
        Todos os Pokémons    
    </Button>
    </Link>
    <Link to="admin/types/create">
    <Button >    
        Cadastrar novo tipo    
    </Button>
    </Link>
    <Link to="admin/pokemons/create">
    <Button >    
        Cadastrar novo Pokémon    
    </Button>
    </Link>
    </Wrapper>
  )
}

export default Pokemons

const Wrapper = styled.div`
display:flex; 
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
hr{
    display: block;
    margin-left: auto;
    margin-right: auto ; 
}
`
