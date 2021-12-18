import { useEffect } from 'react';

import {
  FiBook, FiCode, FiDollarSign, FiShare2,
} from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  EntrepreneurshipSubject,
  FinancialEducationSubject,
  ForeignLanguageSubject,
  ProgrammingSubject,
  SubjectsContainer,
} from './styles';

type Subjects = {
  id: number;
  name: string;
}

export function Subjects() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i / 2.5,
      },
    }),
    hidden: { opacity: 0, y: -10 },
  };

  const entrepreneurshipSubjects: Subjects[] = [
    {
      id: Math.random(),
      name: 'Marketing',
    },
    {
      id: Math.random(),
      name: 'Publicidade',
    }, {
      id: Math.random(),
      name: 'Soft Skills',
    },
    {
      id: Math.random(),
      name: 'Administração',
    },
    {
      id: Math.random(),
      name: 'Economia',
    },
    {
      id: Math.random(),
      name: 'Gestão',
    },
  ];

  const foreignLanguageSubjects: Subjects[] = [
    {
      id: Math.random(),
      name: 'Inglês',
    },
    {
      id: Math.random(),
      name: 'Espanhol',
    }, {
      id: Math.random(),
      name: 'Francês',
    },
    {
      id: Math.random(),
      name: 'Italiano',
    },
    {
      id: Math.random(),
      name: 'Alemão',
    },
  ];

  const financialEducationSubjects: Subjects[] = [
    {
      id: Math.random(),
      name: 'Controle de Finanças',
    },
    {
      id: Math.random(),
      name: 'Investimentos',
    }, {
      id: Math.random(),
      name: 'Blockchain',
    },
    {
      id: Math.random(),
      name: 'NFT',
    },
    {
      id: Math.random(),
      name: 'Tesouro Direto',
    },
    {
      id: Math.random(),
      name: 'Cálculo de CLT',
    },
  ];

  const programmingSubjects: Subjects[] = [
    {
      id: Math.random(),
      name: 'HTML',
    },
    {
      id: Math.random(),
      name: 'CSS',
    }, {
      id: Math.random(),
      name: 'Javascript',
    },
    {
      id: Math.random(),
      name: 'ReactJS',
    },
    {
      id: Math.random(),
      name: 'React Native',
    },
    {
      id: Math.random(),
      name: 'NodeJS',
    },
    {
      id: Math.random(),
      name: 'Dart',
    },
    {
      id: Math.random(),
      name: 'Flutter',
    },
    {
      id: Math.random(),
      name: 'C#',
    },
    {
      id: Math.random(),
      name: 'Unity',
    },
  ];

  return (
    <Container id="subject">
      <h1>Conteúdos</h1>

      <SubjectsContainer>
        <ProgrammingSubject
          ref={ref}
        >
          <div className="circleIcon">
            <FiCode />
          </div>
          <h2>Programação</h2>
          <ul>
            {programmingSubjects.map((subject, i) => (
              <motion.li
                animate={controls}
                initial="hidden"
                variants={variants}
                key={subject.id}
                custom={i}
              >
                <img src="/blueCheck.svg" alt="Check azul" />
                {subject.name}
              </motion.li>
            ))}
          </ul>
        </ProgrammingSubject>

        <FinancialEducationSubject
          ref={ref}
        >
          <div className="circleIcon">
            <FiDollarSign />
          </div>
          <h2>Educação Financeira</h2>
          <ul>
            {financialEducationSubjects.map((subject, i) => (
              <motion.li
                animate={controls}
                initial="hidden"
                variants={variants}
                key={subject.id}
                custom={i}
              >
                <img src="/greenCheck.svg" alt="Check verde" />
                {subject.name}
              </motion.li>
            ))}
          </ul>
        </FinancialEducationSubject>

        <ForeignLanguageSubject
          ref={ref}
        >
          <div className="circleIcon">
            <FiBook />
          </div>
          <h2>Língua Estrangeira</h2>
          <ul>
            {foreignLanguageSubjects.map((subject, i) => (
              <motion.li
                animate={controls}
                initial="hidden"
                variants={variants}
                key={subject.id}
                custom={i}
              >
                <img src="/orangeCheck.svg" alt="Check laranja" />
                {subject.name}
              </motion.li>
            ))}
          </ul>
        </ForeignLanguageSubject>

        <EntrepreneurshipSubject
          ref={ref}
        >
          <div className="circleIcon">
            <FiShare2 />
          </div>
          <h2>Empreendedorismo</h2>
          <ul>
            {entrepreneurshipSubjects.map((subject, i) => (
              <motion.li
                animate={controls}
                initial="hidden"
                variants={variants}
                key={subject.id}
                custom={i}
              >
                <img src="/redCheck.svg" alt="Check vermelho" />
                {subject.name}
              </motion.li>
            ))}
          </ul>
        </EntrepreneurshipSubject>
      </SubjectsContainer>
    </Container>
  );
}
