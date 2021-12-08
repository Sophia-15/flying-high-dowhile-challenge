import React from 'react';

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="headerContent">
        <img src="/Logo.svg" alt="Logo Flying High" />


        <nav>
        <a href="#home">Home</a>
        <a href="#project">Projeto</a>
        <a href="#subject">Conteúdo</a>
        <a href="#sponsors">Patrocinadores</a>
        <a href="#contact">Contato</a>
      </nav>
      </div>
    </HeaderContainer>
  );
}