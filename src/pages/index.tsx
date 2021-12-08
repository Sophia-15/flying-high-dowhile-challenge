import React from 'react';
import { Header } from '../components/Header';

import { Presentation } from '../components/Home';
import { Subjects } from '../components/Subjects';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Subjects />
    </>
  )
}
