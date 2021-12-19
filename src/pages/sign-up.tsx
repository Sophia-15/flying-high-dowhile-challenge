import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi';

import { Input } from '../components/Input';

import { ContainerSignUp, ContainerSignUpLeft, ContainerSignUpRight } from '../styles/pages/sign-up';

export default function SingUp() {
  function submitTheSignUp() {
    toast.success('Cadastro feito com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    toast.success('Mandamos instruções de como concluir o cadastro no seu e-mail!', {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: 'colored',
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <ContainerSignUp>
      <ContainerSignUpLeft>
      <ToastContainer />
        <img src="Logo.svg" alt="Logo Flying High" />

        <p>Essa a nossa tela de cadastro, precisamos saber algumas coisas sobre você antes de te levarmos para as alturas!</p>

        <div className="sign-up-image">
          <img src="SignUp.svg" alt="Welcome" />
        </div>
      </ContainerSignUpLeft>

      <ContainerSignUpRight>
        <img src="Logo.svg" alt="Logo Flying High" />
        
        <h1>Cadastro</h1>

        <AiOutlineUser />
        
        <Input
          label="Nome"
          type="text"
          name="name"
          placeholder="Ex: Nikolas"
        />

        <AiOutlineMail />
        
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Ex: Nikolasdssantana@gmail.com"
        />

        <BiLockAlt />
        
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="A senha precisa ter 8 dígitos"
        />

        <BiLockAlt />
        
        <Input
          label="Confirmar senha"
          type="password"
          name="password_confirmed"
          placeholder="Confirme a sua senha"
        />

        <button onClick={submitTheSignUp}>
          Cadastrar
        </button>
        
      </ContainerSignUpRight>
    </ContainerSignUp>
  )
}
