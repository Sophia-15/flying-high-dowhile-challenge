import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  padding: 77px 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  h1 {
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

export const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 51px auto 0;

  display: grid;
  grid-template-columns: 548px 548px;
  grid-column-gap: 64px;
  grid-row-gap: 35px;
  justify-content: center;

  @media (max-width: 1212px) {
    grid-template-columns: 548px;
  }

  @media (max-width: 572px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TestimonialCard = styled.div`
  width: 100%;
  height: 273px;
  padding: 32px;

  border-radius: 8px;
  border: 2px solid transparent;

  background-color: ${({ theme }) => theme.colors.background};

  transition: all 0.4s;

  p {
    color: ${({ theme }) => theme.colors.subjectText};
    line-height: 27px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.blue};
    transform: translateY(-5px);
    box-shadow: 4px 4px 25px 0px #2393fe40;
  }

  .studentInfo {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-top: 24px;

    img {
      height: 56px;
      width: 56px;
      border-radius: 50%;
    }

    span {
      &:first-child {
        margin: 3.5px 0;
        display: block;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.white};
      }

      &:last-child {
        color: ${({ theme }) => theme.colors.footerText};
        font-size: 14px;
      }
    }
  }

  @media (max-width: 572px) {
    width: 300px;
    height: auto;
  }
`;
