import React from 'react';

import { FiCalendar, FiKey, FiUsers } from 'react-icons/fi';

import { 
  CardInformation,
  Container,
  ContainerInformation,
  ContentCard,
  ContentInformation, 
  LeftInformation, 
  RightInformation 
} from './styles';


export function Information(){
  return (
    <Container>
      <ContainerInformation>
        <h1>Sobre o projeto</h1>

        <ContentInformation>
          <LeftInformation>
            <img src="./building.svg" alt="" />
          </LeftInformation>

          <RightInformation>
            <CardInformation>
              <FiUsers size="40" color="white" />

              <ContentCard>
                <h2>Quem somos nós?</h2>

                <p>
                  Somos uma plataforma de educação gratuita
                  que visa potenciar a carreira das pessoas.
                </p>
              </ContentCard>
            </CardInformation>

              <CardInformation>
                <FiCalendar size="40" color="white" />

                <ContentCard>
                  <h2>Como fazemos isso?</h2>

                  <p>
                    Através de cursos feitos por profissionais
                    no mercado e de financiamentos coletivos.
                  </p>
                </ContentCard>
              </CardInformation>

              <CardInformation>
                <FiKey size="40" color="white" />

                <ContentCard>
                  <h2>Qual é o nosso diferencial?</h2>

                  <p>
                    Um metódo de ensino prático e gratuito. Além
                    da estrutura que apelidamos de Millennium Falcon:
                    um local estilo Lan House que comporta diversos
                    computadores onde somente o aluno cadastrado na
                    plataforma poderá entrar, tornando o ensino mais
                    acessível. 
                  </p>
                </ContentCard>
              </CardInformation>
          </RightInformation>
        </ContentInformation>
      </ContainerInformation>
    </Container>
  );
}