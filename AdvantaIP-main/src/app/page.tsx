import { Hero } from '@/components/home/hero';
import { Intro } from '@/components/home/intro';
import { ServicesGrid } from '@/components/home/services-grid';
import { Portfolio } from '@/components/home/portfolio';
import { About } from '@/components/home/about';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Process } from '@/components/home/process';
import { WhoWeServe } from '@/components/home/who-we-serve';
import { Expertise } from '@/components/home/expertise';
import { ClientReasons } from '@/components/home/client-reasons';
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <Portfolio />
      <About />
      <WhyChooseUs />
      <Process />
      <WhoWeServe />
      <Expertise />
      <ClientReasons />
      <Faq />
      <FinalCta />
    </>
  );
}
