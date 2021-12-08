import React from 'react';
import { Header } from '../components/Header';

import { Presentation } from '../components/Home';
import { Subjects } from '../components/Subjects';
import { Information } from '../components/Information';


export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Information />
      <Subjects />
    </>
  )
}
