"use client";

import HeroSection from "../components/home/HeroSection";
import StackSection from "../components/home/StackSection";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root >
        <HeroSection />
        <StackSection/>
    </ReactLenis>
  ); 
}
