import ExperimentCard from "./@components/ExperimentCard";
import Coutry from "./@components/Country";
import Faq from "./@components/Faq";
import Features from "./@components/Features";
import Hero from "./@components/Hero";
import Info from "./@components/Info";
import AnimateOnScroll from "@/components/features/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <AnimateOnScroll>
        <Hero />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.3}>
        <Coutry />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.5}>
        <Features />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4}>
        <Info />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4}>
        <Faq />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4}>
        <ExperimentCard />
      </AnimateOnScroll>
    </>
  );
}