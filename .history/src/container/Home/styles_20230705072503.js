import styled from 'styled-components'

export const Principal=styled.div`
    width: 100%;
    height:100vh;
    @media (max-width:1000){
      
    }
 
`
export const Container = styled.div`

  display: flex;
  justify-content:space-around;
  align-items:space-around;
  @media (max-width:1000px){
      display: block;
  }
  
 `

export const Imagem = styled.div`
           display: flex;
           justify-content:center;
           flex-wrap: wrap;
          
           

           img{
            border-radius:50px;
            box-shadow: 26px 20px 24px  rgba(250,15,46,0.66); 
            width: 300px;
            height: 400px;
          ;
            
            @media (max-width:900px){
              width: 400px;
              margin-left:100%;
              margin-top:20px ;
      }
          
           }
 `


export const Texto = styled.div`
            display: flex;
            flex-direction:column;
            position: relative;
            width: 600px;
          
           

            div{
              font-size:30px ;
              width: 300px;
            }
                     

            h2{
                font-size:65px;
                margin-left:120px ;
                width: 50px;    
                 span{
                    color:rgb(255, 20, 52);
                    
                 }     
                 @media (max-width:1000px){
                  width: 400px;
                  font-size:50px;
                  margin-top:40px ;
                   
                  
                 }
                
            }
            p{
                margin-top:40px ;
                margin-left:40px;
              font-size:30px;
              @media (max-width:1000px){
                font-size:30px;
                width: 700px;
              }
              
            }
            h1{
                font-size:50px ;
                margin-left:120px ;
                width: 900px;   
                
                @media (max-width:1000px){
                  font-size:50px;
                
               
                
                }
                 span{
                    color:rgb(255, 20, 52);
                    
                 }     
              div{
                font-size:30px;
              }
            }
`
export const Div = styled.div`
            margin-top:40px;
            background: #000;
            width: 100%;
            height: 6vh;
           
            
            @media (max-width:1000px){
              width: 220%;
              height: 8vh;
            }
`
export const Objetivo = styled.div`

display: flex;
margin-top:40px;
 

@media (max-width:1000px){
  display: flex;
  flex-direction:column ;
  
   
}

p{
    width: 800px;
    font-size:25px;
  
    @media (max-width:1000px){
      width: 700px;
      font-size:30px ;
      margin-left:150px ;
    }
     
}
 

img{
            border-radius:50px;
            width: 300px;
            height: 300px;
            margin-left:80% ;
            box-shadow: 26px 20px 24px  rgba(250,15,46,0.66); 

            @media (max-width:1000px){
              width: 400px;
              margin-left:40%;
              margin-top:50px;
              box-shadow: 26px 20px 24px  rgba(250,15,46,0.66); 
            }
           }

           @media (max-width:1000px){
                   display:flex;
                   justify-content:center;
                   align-items:center;
           }
     
     
    
`

export const ImagemMEdia = styled.div`
display: none;
  
@media (max-width:900px){
               display: flex;
              border-radius:50px ;
              box-shadow: 16px 10px 20px  rgba(250,15,46,0.66);
          
}
            

`

export const ImagemSecond = styled.div`
   
`
export const Drop=styled.div`
     @media (max-width:1000px){

      display: flex;
      justify-content:flex-end;
      align-items:center;
      margin-left:190%;
     }
`