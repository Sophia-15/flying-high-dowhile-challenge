import React from 'react';

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="headerContent">
        <img src="/Logo.svg" alt="Logo Flying High" />


        <nav>
        <a href="">Home</a>
        <a href="">Projeto</a>
        <a href="">Conteúdo</a>
        <a href="">Patrocinadores</a>
        <a href="">Contato</a>
      </nav>
      </div>
    </HeaderContainer>
  );
}