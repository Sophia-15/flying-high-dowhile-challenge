import React from 'react';

import { ContainerHome, LeftHome, RightHome } from './styles';

import './styles.ts';

export function Presentation() {
  return(
    <ContainerHome>
      <LeftHome>
        <h1>Venha construir o seu futuro e <span>voe com a gente</span>.</h1>
      
        <p>
        Ensinamos conteúdos relevantes para a
        sua carreira de forma gratuita, acessível e objetiva.
        </p>

        <button>
          Venha conhecer
        </button>
      </LeftHome>

      <RightHome>
        <img src="/programming.svg" alt="pessoas programando" />
      </RightHome>
    </ContainerHome>
  );
}