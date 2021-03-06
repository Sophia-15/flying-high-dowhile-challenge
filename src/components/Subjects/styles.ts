import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  padding-top: 77px;

  h1 {
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

export const SubjectsContainer = styled.section`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  h2 {
    margin: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
  }

  .circleIcon {
    margin: 2rem;
    height: 56px;
    width: 56px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 32px;
      stroke-width: 1.5px;
    }
  }

  li {
    display: flex;
    align-items: center;

    margin: 0 2rem;
    gap: 0.5rem;
    margin-bottom: 16px;

    color: ${({ theme }) => theme.colors.subjectText};
  }
`;

export const ProgrammingSubject = styled(motion.div)`
  .circleIcon {
    background: ${({ theme }) => theme.colors.darkenBlue};
    color: ${({ theme }) => theme.colors.blue};
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const FinancialEducationSubject = styled(motion.div)`
  .circleIcon {
    background: ${({ theme }) => theme.colors.darkenGreen};
    color: ${({ theme }) => theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const ForeignLanguageSubject = styled(motion.div)`
  .circleIcon {
    background: ${({ theme }) => theme.colors.darkenOrange};
    color: ${({ theme }) => theme.colors.orange};
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const EntrepreneurshipSubject = styled(motion.div)`
  .circleIcon {
    background: ${({ theme }) => theme.colors.darkenRed};
    color: ${({ theme }) => theme.colors.red};
    border: 2px solid ${({ theme }) => theme.colors.red};
  }
`;
