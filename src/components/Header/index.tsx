/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';

import Link from 'next/link';

import { AiOutlineUser } from 'react-icons/ai';

import { HeaderContainer } from './styles'

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBtn.classList.add('fixed');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuBtn.classList.remove('fixed');
        menuOpen = false;
      }
    });
  }, []);

  return (
    <HeaderContainer>
      <div className="headerContent">
        <img src="/Logo.svg" alt="Logo Flying High" />

        <nav>
          <a href="#home">Home</a>
          <a href="#project">Projeto</a>
          <a href="#subject">Conteúdo</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#sponsors">Patrocinadores</a>
          <a href="#contact">Contato</a>
          <Link href="sign_up">
            <div className="sign-up">
              <AiOutlineUser />
                <a>
                  Cadastro
                </a>
            </div>
          </Link>
        </nav>

        <div
          className="menu-btn"
          onClick={() => toggleMenu()}
        >
          <div className="menu-btn__burger" />
        </div>
      </div>
      {showMenu && (
        <nav className="responsive-navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#project">Projeto</a></li>
            <li><a href="#subject">Conteúdo</a></li>
            <li><a href="#sponsors">Patrocinadores</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#contact">Cadastro</a></li>
          </ul>
        </nav>
      )}
    </HeaderContainer>
  );
}
