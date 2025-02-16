'use client';

import {Footer, 
        About, 
        Initiatives, 
        Events, 
        Facilities, 
        Testimonials, 
        Team , 
        Landing } from '../components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <About />
      <Initiatives />
      <Events />
      <Facilities />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
}
