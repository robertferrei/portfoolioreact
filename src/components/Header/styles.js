import styled from 'styled-components'


export const Container = styled.div`
      display: flex;
      justify-content:center;
  
      
`

export const CaixaLinks = styled.div`
         display:flex;
         justify-content:flex-end;
         background:rgb(255, 20, 52);    
         width: 100%;
         height:50px;
         
      
       
`

export const Menu = styled.ul`
       display: flex;
       justify-content:center;
        gap:50px;

`

export const Li = styled.li`
   list-style:none;
    font-size: 22px;
   cursor:pointer;
   font-weight:10px;
   position: relative;   
   
    right:40px;
    a{
      color: #fff;
    }

     

  &::after{
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
        background:	#FF0000 ;
        position: absolute;
        bottom: -10px;
        left:0px;
        transition:width 0.5s ease-in-out;
        
  }

  &:hover::after{
        width: 100%;
    }
  
 

  
`