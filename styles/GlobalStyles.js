import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:none;
        text-decoration:none;
        font-family: 'Orbitron', sans-serif;
        
        @media (max-width:1000px){
           
           
              
          
        }
        
}

body{
    background:#fff;
    @media (max-width:1000px){
            body{
                width: 100%;
            }
        }
}
`