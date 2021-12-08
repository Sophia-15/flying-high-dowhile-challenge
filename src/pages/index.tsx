import React from 'react';
import { Header } from '../components/Header';

import { Presentation } from '../components/Home';
import { Information } from '../components/Information';
import { Sponsors } from '../components/Sponsors';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Information />
      <Sponsors />
    </>
  )
}
