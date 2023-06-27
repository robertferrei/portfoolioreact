import styled from "styled-components"


export const Container= styled.div`
    background:black;
    box-shadow: 26px 20px 24px  rgba(250,15,46,0.66);
    height:95vh;
    width: 100%;
    background: #000;

    @media (max-width:1000px){
   width: 250%;
  height: 250vh;
    
   background: #000;
 }

    h1{
        color:#fff;
        margin-left:20px;
        @media (max-width:1000px){
        color:#fff;
        
 }
    }

div{
   
    width: 100%;
   display:flex;
   flex-wrap:wrap;
   background: #fff;
   border-radius:90px;
   background: red;
   @media (max-width:1000px){
 background: red;
 
 }
   
   
    img{
        margin-top:30px;
        width:300px;
    }
}

`