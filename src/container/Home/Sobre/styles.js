import styled from "styled-components"

export const Container = styled.div`

background:#000;
@media (max-width:1000px){
   width: 250%;
   
 }
 
 
    
div{
   display: flex;
   flex-direction:none;
   justify-content:center;
    width: 100%;
     
    
    p{
        width: 100%;
        color: #fff ;
        margin-top:90px;
        font-size:18px;

        font-weight:900;
        margin-left:100px ;
        @media (max-width:1000px){
            display: block;
            font-size:30px;
            width: 900%;

 }
      
      
      
    }
    img{
        width:700px;
        border-radius:70px;
        height:60vh;
        margin-top:100px;
        @media (max-width:1000px){
         width: 300px;
         display: none;
         
 }
         
        
        
       
    }
    
}
`

export const Imagem = styled.div`
width: 30px;
 
`

export const Titulo = styled.div`
  background: #000;
  display: flex;
  justify-content:center;
  @media (max-width:1000px){
   width: 250%;
 }
h2{
     
    color: #FF0000 ;
    @media (max-width:1000px){
   font-size: 30px;
 }
}

`

export const Hobby = styled.div`
    background: #FF0000  ;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items:center;
    border: solid 1px;
    @media (max-width:1000px){
   width: 250%;
 
 }
`
export const Sports = styled.div`
    background: #000;
    display: flex;
    justify-content:center;

    
    
    @media (max-width:1000px){
   width: 250%;
 }
 
  

    img{
        width: 500px;
        @media (max-width:1000px){
         width:300px;
 }
    }

    h3{
        color: #fff;
        margin-left:100px ;
        margin-top:22px ;
        @media (max-width:1000px){
            margin-top:30px;
            font-size:30px;
 }
    }
    p{
        color: #fff;
        margin-top:40px;
        margin-left:15px ;
        @media (max-width:1000px){
        font-size:25px;
 }
    }

     

`