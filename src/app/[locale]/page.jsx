import CTA from "@/components/home/CTA";
import Calculator from "@/components/home/Calculator";
import Despre from "@/components/home/Despre";
import Hero from "@/components/home/Hero";
import Specialize from "@/components/home/Specialize";

export default function Home() {
  return (
    <>
      <Hero />
      <Despre />
      <Calculator />
      <Specialize />
      <CTA />
    </>
  );
}
