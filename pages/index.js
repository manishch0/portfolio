import Head from "next/head";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import WorkExperience from "../component/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snay-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Manish || Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
    </div>
  );
}
