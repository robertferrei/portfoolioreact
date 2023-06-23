import styled from 'styled-components'


export const Container = styled.div`

  display: flex;
  justify-content:space-around;
  align-items:space-around;
  margin-top:200px ;
 
 

  
 `

export const Imagem = styled.div`
           display: flex;
           justify-content:center;
           flex-wrap: wrap;

           img{
            border-radius:50px;
            width: 700px;
            box-shadow: 26px 20px 24px  rgba(250,15,46,0.66);
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
                
            }
            p{
                margin-top:40px ;
                margin-left:40px;
              font-size:30px;
              
            }
            h1{
                font-size:50px ;
                margin-left:120px ;
                width: 900px;    
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
            height: 6vh;
`
export const Objetivo = styled.div`

display: flex;
margin-top:40px;


p{
    width: 800px;
    font-size:25px;
}
 

img{
            border-radius:50px;
            width: 900px;
            margin-left:190px ;
           }
`