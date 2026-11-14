import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import BookingDialog from "@/components/Booking";
import Resume from "@/components/Resume";
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
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BookingDialog />
    </>
  );
}
