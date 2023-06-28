import styled from 'styled-components'

export const Container=styled.div`
          background:#000;
          div{
    display: flex;
    justify-content:center;
    border-radius:30px;
    h1{
        font-size:25px;
        color: #fff;
        @media (max-width:1000px){
        display: none;
         
 }
    }
     
}
`

export const Imagem=styled.div`
 background:#000;
 display:flex;
 justify-content:space-around;
 padding:50px;
 box-shadow: 26px 25px 29px  rgba(250,15,46,0.66);
 @media (max-width:1000px){
   width: 250%;
 }
 img{
    width:600px;
    @media (max-width:1000px){
   width: 250px;
 }
 }
 h3{
    color: rgba(250,15,46,0.66);
    font-size:50px;
    margin-top:40px;
    @media (max-width:1000px){
  font-size:30px;
 }
 }


 

`

export const Formulario=styled.div`
  
 display: flex;
 flex-direction:column ;
 justify-content:center;
 align-items:center;
 margin-top:90px; 
 border-radius:70px; 
 background: #000;
 height:20vh;
 cursor:pointer;
 @media (max-width:1000px){
   width: 250%;
   height: 200vh;
 }
 
 h1{
   margin-top:20px;
   color: #fff;
   
  
 }
 
 
 h2{
   margin-top:10px;
    color: rgba(250,15,46,0.66);
    @media (max-width:1000px){
   font-size:35px;
   margin-top:30px
 }
 }

`