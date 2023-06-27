import styled from 'styled-components'

export const Container=styled.div`
 position: relative;
            display: inline-block;
       
            

      div{
        position: absolute;
        background:#fff;
        min-width:160px;
        box-shadow: 0px 8px 16px 0px rgba(250,15,46,0.66);
        z-index:1;
        opacity:1;
        border-radius:8px ;
        transition: 0.3s;
        @media (max-width:900px){
            width: 200px;
        }

       
        a{
            @media (max-width:900px){
                font-size:25px;
            }
        }
       
        
        

        &:hover{
            opacity: 2;
            z-index:1;
        }

        li{
            display: block;
            color:#000;
            padding: 12px 24px;
            text-decoration: none;
            border-radius:8px;
            transition: 0.3s;
            list-style:none;
            cursor:pointer ;
            a{
                color: #000;
                @media (max-width:900px){
                    font-size:25px;
                }
            }
            
            &:hover{
                background: rgba(250,15,46,0.66);;
            }
        }
      }

`
 
 