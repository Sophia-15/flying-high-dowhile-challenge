import Head from 'next/head';

import { ContainerHome, LeftHome, RightHome } from './styles';

import './styles.ts';

export function Presentation() {
  function toProjectInfo() {
    window.scrollTo({
      top: window.innerHeight,
    });
  }

  return (
    <ContainerHome id="home">
      <Head>
        <title>Home | FlyingHigh</title>
      </Head>
      <LeftHome>
        <h1>Venha construir o seu futuro e <span>voe com a gente</span>.</h1>

        <p>
          Ensinamos conteúdos relevantes para a
          sua carreira de forma gratuita, acessível e objetiva.
        </p>

        <button type="button" onClick={toProjectInfo}>
          Venha conhecer
        </button>
      </LeftHome>

      <RightHome>
        <img src="/programming.svg" alt="pessoas programando" />
      </RightHome>
    </ContainerHome>
  );
}
