// Pages
import Home from "@/app/(landing)/_home/page";
import About from "@/app/(landing)/_about/page";
import Skills from "@/app/(landing)/_skills/page";
import Projects from "@/app/(landing)/_projects/page";
import Contact from "@/app/(landing)/_contact/page";

export default function Landing() {
  return (
    <main className="w-full">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
