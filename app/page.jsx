import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import {
  Hero, Mission, WhatIDo, Expertise, Work, Experience, Credentials, About, Footer,
} from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
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
