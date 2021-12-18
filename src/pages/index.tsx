import { Header } from '../components/Header';

import { Presentation } from '../components/Home';
import { Subjects } from '../components/Subjects';
import { Information } from '../components/Information';
import { Sponsors } from '../components/Sponsors';
import { Footer } from '../components/Footer';
import { StudentTestimonials } from '../components/StudentTestimonials';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Information />
      <Subjects />
      <StudentTestimonials />
      <Sponsors />
      <Footer />
    </>
  );
}
