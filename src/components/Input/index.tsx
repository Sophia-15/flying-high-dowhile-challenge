import React from 'react';

import { ContainerInput } from './styles'

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  error?: string;
}

export function Input({ label, type, name, placeholder }: InputProps){
  return (
    <ContainerInput>
      <label>{label}</label>

      <input 
        type={type}
        name={name} 
        placeholder={placeholder}
      />
    </ContainerInput>
  );
}