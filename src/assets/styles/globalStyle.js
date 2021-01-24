import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/src/sweetalert2.scss'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    -webkit-font-smoothing: antialiased; 
       
}

body {
    font-family: 'Poppins', sans-serif;
    h1{
        font-weight: 600;
        font-size: 3rem;
        opacity: 0.8;
    }
    h2, p{
        font-weight: 500;
        color: black;
        opacity: 0.8;
    }
}
`


export default GlobalStyle