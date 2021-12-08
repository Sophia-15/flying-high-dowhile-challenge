import React from 'react';

import { Container, ContainerSponsors, ContentSponsors } from './styles'

export function Sponsors(){
  return (
    <Container>
      <ContainerSponsors>
        <h1>Patrocinadores</h1>

        <h2>Empresas que acreditam no Projeto</h2>
        <ContentSponsors>
          <img src="/rocketseat.svg" alt="empresa parceira" />

          <img src="/rocketseat.svg" alt="empresa parceira" />

          <img src="/rocketseat.svg" alt="empresa parceira" />

          <img src="/rocketseat.svg" alt="empresa parceira" />

          <img src="/rocketseat.svg" alt="empresa parceira" />
        </ContentSponsors>
      </ContainerSponsors>
    </Container>
  );
}