import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Sections from "@/Components/Sections";
import './globals.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sections />
    </main>
  );
}
