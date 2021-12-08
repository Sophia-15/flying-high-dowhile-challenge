import React from 'react';

import { ContainerHome, LeftHome, RightHome } from './styles';

import './styles.ts';

export function Presentation() {
  return(
    <ContainerHome>
      <LeftHome>
        <h1>Venha construir o seu futuro e <h1>voe com a gente</h1>.</h1>
      
        <p>
        Ensinamos conteúdos relevantes para a
        sua carreira de forma gratuita, acessível e objetiva.
        </p>
      </LeftHome>

      <RightHome>
        <img src="/programming.svg" alt="" />
      </RightHome>
    </ContainerHome>
  );
}