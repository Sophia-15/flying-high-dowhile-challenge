import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  height: 462px;
  border-bottom: 1px solid #29292E;
  display: flex;
  flex-direction: column;
`

export const ContentFooter = styled.main`
  border-bottom: 1px solid ${({theme}) => theme.colors.buttonColor};
  border-top: 1px solid ${({theme}) => theme.colors.buttonColor};
`

export const GridFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 837px;
  width: 100%;  
  max-width: 1440px;
  height: 316px;
  margin: 0 auto;
`;

export const RightFooter = styled.div`
  border-right: 1px solid ${({theme}) => theme.colors.buttonColor};
  margin: auto 0;

  span {
    color: ${({theme}) => theme.colors.footerText};
    display: block;
    line-height: 2rem;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 71px;
  margin-left: 200px;
  
  ul {
    li {
      line-height: 2rem;
      color: ${({theme}) => theme.colors.footerText};

      &:first-child {
        color: ${({theme}) => theme.colors.white};
        font-weight: 700;
      }
    }
  }
`;

export const FooterFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38rem;
  margin: auto 0;
`;

export const SocialMedias = styled.div`
  button {
    margin: 0 20px;
    height: 48px;
    width: 48px;
    background: ${({theme}) => theme.colors.buttonColor};
    border: none;
    outline: none;
    border-radius: 0.5rem;
    transition: all .2s;
    cursor: pointer;
    
    &:hover {
      background: ${({theme}) => theme.colors.blue};
      
      svg {
        color: ${({theme}) => theme.colors.white};
      }
    }

    svg {
      font-size: 1rem;
      color: ${({theme}) => theme.colors.blue}; 
    }
  }
`

export const Creators = styled.div`
  h2 {
    font-weight: 500;
    font-size: 1.1rem;
    color: ${({theme}) => theme.colors.footerFooter};
  }
`