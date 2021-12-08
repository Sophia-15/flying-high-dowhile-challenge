import React from 'react';

import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si';

import { ContainerFooter, ContentFooter, Creators, FooterFooter, LeftFooter, RightFooter, GridFooterContainer, SocialMedias } from './styles'


export function Footer(){
  return (
    <ContainerFooter>
      <ContentFooter>
        <GridFooterContainer>
          <RightFooter>
            <img src="/Logo.svg" alt="Logo Flying High" />
            <span>Flying Corporation</span>
            <span>Todos os direitos reservados</span>
          </RightFooter>

          <LeftFooter>
            <ul>
              <li>Tópicos</li>
              <li>Home</li>
              <li>Projeto</li>
              <li>Conteúdo</li>
              <li>Patrocinadores</li>
              <li>Contato</li>
            </ul>
            
            <ul>
              <li>Ações</li>
              <li>Cadastro</li>
              <li>Doador</li>
              <li>Parcerias</li>
              <li>Vagas</li>
            </ul>
            
            <ul>
              <li>Contato</li>
              <li>contato@flying.com.br</li>
              <li>
              +55 11 96972-7693
              </li>
            </ul>
            
            <ul>
              <li>Dúvidas</li>
              <li>Central de Ajuda</li>
              <li>Comunidade</li>
            </ul>
          </LeftFooter>
        </GridFooterContainer>
      </ContentFooter>

      <FooterFooter>
          <SocialMedias>
            <button>
              <a href="https://twitter.com/devpoop1">
                <BsTwitter size="28" />
              </a>
            </button>

            <button>
              <a href="https://github.com/Sophia-15">
                <BsGithub size="28" />
              </a>
            </button>
 
            <button>
              <a href="https://www.instagram.com/nikolas.dev/">
                <BsInstagram size="28" />
              </a>
            </button>

            <button>
              <a href="https://www.linkedin.com/in/nikolas-santana-/">
                <BsLinkedin size="28" />
              </a>
            </button>

            <button>
              <a href="https://www.youtube.com/watch?v=6yoytnzR0Zo">
                <SiDiscord size="28" />
              </a>
            </button>
          </SocialMedias>

          <Creators>
            <h2>Site desenvolvido por Nikolas Santana e Sophia Gallindo.</h2>
          </Creators>
      </FooterFooter>
    </ContainerFooter>
  );
}