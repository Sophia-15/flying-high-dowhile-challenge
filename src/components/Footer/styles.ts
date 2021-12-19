import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  height: 462px;
  border-bottom: 1px solid #29292e;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  @media (max-width: 1040px) {
    border: 0;
  }
`;

export const ContentFooter = styled.main`
  border-bottom: 1px solid ${({ theme }) => theme.colors.buttonColor};
  border-top: 1px solid ${({ theme }) => theme.colors.buttonColor};
`;

export const GridFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 837px;

  width: 100%;
  max-width: 1440px;

  height: 316px;

  margin: 0 auto;

  @media (max-width: 1440px) {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 1040px) {
    min-height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 520px) {
    min-height: 200px;
  }
`;

export const RightFooter = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.buttonColor};
  margin: auto 0;

  span {
    color: ${({ theme }) => theme.colors.footerText};

    display: block;

    line-height: 2rem;
  }

  @media (max-width: 1380px) {
    border: 0;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 71px;
  margin-left: 200px;

  ul {
    & + ul li:hover {
      text-decoration: underline;
    }

    li {
      margin: 0 2rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.footerText};
      cursor: pointer;

      &:first-child {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;

        &:hover {
          cursor: default;
          text-decoration: none;
        }
      }
    }

    a {
      color: ${({ theme }) => theme.colors.footerText};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 1250px) {
    margin-top: 71px;
    margin-left: 0;
  }

  @media (max-width: 1040px) {
    margin: 2rem 0;
  }

  @media (max-width: 680px) {
    ul {
      margin: 0 1rem;

      li {
        margin: 0;
      }
    }
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const FooterFooter = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 0 10rem;
  margin: auto 0;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SocialMedias = styled.div`
  button {
    margin: 5px 20px;

    height: 48px;
    width: 48px;

    background: ${({ theme }) => theme.colors.buttonColor};
    border: none;
    outline: none;

    border-radius: 0.5rem;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.blue};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    a {
      svg {
        font-size: 1.75rem;
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  @media (max-width: 1040px) {
    margin: 2rem 0;
  }

  @media (max-width: 680px) {
    margin: 1rem;

    button {
      margin: 5px 8px;
      width: 38px;
      height: 38px;

      a {
        svg {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const Creators = styled.div`
  h2 {
    font-weight: 500;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.footerFooter};
  }

  @media (max-width: 600px) {
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    text-align: center;
  }
`;
