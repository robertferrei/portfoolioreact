import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:50px;

    @media (max-width:900px){
                width: 400%;
                
                 }
   
    
     
    
   
    img{
        width:899px;
        box-shadow: -10px 2px 10px rgba(250,15,46,0.66);
        border-radius:10px;
        position:relative;
        @media (max-width:900px){
                  width: 700px;
                  margin-top:20% ;
                  position:relative;
                  padding-left:30px;
                  height: 60vh;
                 }
        
       
         
    }
    h3{
        color:   rgba(250,15,46,0.66);
        margin-top:40px ;
        display: flex;
        flex-direction:column;
        @media (max-width:900px){
          
            font-size:30px;
        }
    }
    button{
        color:#fff
    }

 

`

export const Descrition = styled.div`
        width: 60%;
        height: 90%;
      
        display: flex;
        justify-content:center;
        flex-direction:column ;
        border-radius:30px;
      
 
        margin-top:20px;
        text-align:center;

    div{  
        width: 50%;
        height: 40vh;
        display: flex;
        
       
       background:red;
       border-radius:20px;
       margin-left:50%;
       margin-top:20px ;
       @media (max-width:900px){
          
       height: 60vh;
      }
    }
    p{
        
        
        text-align:center;
        font-size:20px;
        color:#fff;
        margin-top:20%;
        
    }
    h1{
        margin-top:20px;
        color: #fff;
        margin-left:50% ;
    }
`