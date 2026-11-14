import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import BookingDialog from "@/components/Booking";
import Resume from "@/components/Resume";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Credentials from "@/components/Credentials";
import Motion from "@/components/Motion";
import { Hero, Mission, WhatIDo, Experience, About, Footer } from "@/components/Sections";

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
      <Motion />
    </>
  );
}
