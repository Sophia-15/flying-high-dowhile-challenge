import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6rem;
  border-bottom: 1px solid #29292E;
  display: flex;

  .headerContent {
    width: 100%;  
    max-width: 1216px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav { 
      a { 
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        line-height: 5rem;
        color: ${({theme}) => theme.colors.descriptionText};
        font-size: 1.1rem;

        transition: color .3s;

        &:hover {
          color: ${({theme}) => theme.colors.footerText};
        }

        & + a {
          margin-left: 1.5rem;
        }
      }
    }
  }
`