import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6rem;
  border-bottom: 1px solid #29292E;
  display: flex;

  .responsive-navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: ${({theme}) => theme.colors.background};

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {     
      font-size: 2.6rem;
      line-height: 4rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      transition-duration: 0.5s;
      
      li {
        padding: .5rem 0;

        a { 
          color: ${({theme}) => theme.colors.white};
        }
      }
    }
  }

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

    .menu-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1000;

      display: none;
      justify-content: center;
      align-items: center;

      width: 50px;
      height: 50px;

      cursor: pointer;
      transition: all .5s ease-in-out;
    }

    .fixed {
      position: fixed;
    }

    .menu-btn__burger {
      width: 50px;
      height: 6px;

      background: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255,101,47,.2);

      transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before,
    .menu-btn__burger::after {
      content: '';
      position: absolute;

      width: 50px;
      height: 6px;

      background: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255,101,47,.2);

      transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before {
      transform: translateY(-16px);
    }
    .menu-btn__burger::after {
      transform: translateY(16px);
    }
      
    .menu-btn.open .menu-btn__burger {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }
    .menu-btn.open .menu-btn__burger::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
    .menu-btn.open .menu-btn__burger::after {
      transform: rotate(-45deg) translate(35px, 35px);
    } 
  }

  @media (max-width: 1480px) {
    .headerContent {
      margin: 0 5rem;
    }
  }

  @media (max-width: 970px) {
    nav {
      display: none;
    }

    .menu-btn {
      display: flex !important;
    }
  }

  @media (max-width: 659px) {
    .headerContent {
      margin: 0 2rem;
    }
  }

  @media (max-width: 420px) {
    .headerContent {
      img {
        width: 180px;
      }
    }
  }
`