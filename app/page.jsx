import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import {
  Hero, Stats, WhatIDo, Expertise, Work, Experience, Credentials, About, Footer,
} from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <WhatIDo />
        <Expertise />
        <Work />
        <Experience />
        <Credentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
