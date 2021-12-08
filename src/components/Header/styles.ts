import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6rem;
  border-bottom: 1px solid #29292E;
  display: flex;

  .headerContent {
    width: 100%;  
    max-width: 1440px;
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
        color: ${({theme}) => theme.colors.footerText};
        font-size: 1.1rem;

        transition: color .3s;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 25px;
          left: 0;
          background: ${({theme}) => theme.colors.blue};
          transform-origin: bottom right;
          transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
         

        &:hover {
          color: ${({theme}) => theme.colors.descriptionText};
        }

        & + a {
          margin-left: 1.5rem;
        }
      }
    }
  }
`