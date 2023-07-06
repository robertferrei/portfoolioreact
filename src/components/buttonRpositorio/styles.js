import styled from "styled-components"

export const Buutton=styled.button`
        width: 100%;
        border-radius:40px ;
        font-size:15px;
       background: #000;
       margin-top:30px;
       cursor:pointer;
       border:none;
       @media (max-width:900px){
          
          font-size:20px;
      }

       &:hover{
       
        background: #2c3132;
        transition:1s;
        opacity:0.5
       }

`