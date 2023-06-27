import styled  from "styled-components"

export const Buttonn=styled.button`
        background: #9d0208;
        color: #fff; 
        font-weight:700;
        cursor:pointer;
        border-radius:5px;
        font-size:20px ;
        margin-top:30px ;
        @media (max-width:900px){
            width: 300px;
            font-size:25px;
           
        }

        &:hover{
            color: #370617;
            opacity:0.7;
        }

`