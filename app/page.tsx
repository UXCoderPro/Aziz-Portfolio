import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bgg-blue-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full ">
        {/* <FloatingNav /> */}

        <Hero />
        <Portfolio />
        <About />
      </div>
    </main>
  );
}
