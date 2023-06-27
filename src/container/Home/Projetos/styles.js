import styled from 'styled-components'

export const Container=styled.div`
     
     
     

 `
export const Texto =styled.div`

display:flex;
justify-content:space-around;
background:#000;
width: 100%;
 
@media (max-width:900px){
  width: 250%;
}
 
 
            img{
                margin-top:20px;
                width:500px;
                box-shadow: 26px 20px 24px  rgba(250,15,46,0.66);
                border-radius:90px;
                @media (max-width:900px){
                  width: 450px;
                 }
            }

            h3{
                font-size:50px;
                color: #fff;
              
            }
            span{
                color:red;
            }

            .imagem-secundaria{
                 width: 500px;
                 height:500px;
                 margin-top:25px;
                 box-shadow: -26px 20px 24px  rgba(250,15,46,0.66);
                 @media (max-width:900px){
                  width: 500px;
                  display: none;
                 }
                  
            }

            .efeito-Typeit{
              h3{
                font-size:35px;
                margin-top:20px;
                @media (max-width:900px){
                width: 400px;
                 font-size:30px;
                 }
              }
            }
            
            
`

export const Main =styled.div`
  display: none;
@media (max-width:900px){
  display: block;
     background: #000;
     width: 250%;
     height: 90vh;}
   
`

 
 
 