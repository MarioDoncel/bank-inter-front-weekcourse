import styled from 'styled-components';

export const CircleContainer = styled.div`
   width: 74px;
   height: 74px;
   border-radius: 50%;
   border: 1px solid ${({theme}) => theme.colors.primary};
   display: flex;
   align-items:center;
   justify-content: center;
   margin-right: 20px;
   color: ${({theme}) => theme.colors.primary};
   background-color: ${({theme}) => theme.colors.backgroundLight};
   

   p{
      text-indent: 1rem;
      font-weight: 500;
      letter-spacing: 1rem;
      font-size: 2rem;
      text-align: center;
   }
   
   
`