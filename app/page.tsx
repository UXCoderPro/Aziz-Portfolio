import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative  bg-blue-gradient-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav
        navItems={[
          { name: "About", link: "#home", icon: <FaHome /> },
          { name: "Skills", link: "#home", icon: <FaHome /> },
          { name: "Projects", link: "#about", icon: <FaHome /> },
          { name: "Contact", link: "#skills", icon: <FaHome /> },
        ]}
      />
      <div className="max-w-full w-full">
        <Hero />
      </div>
    </main>
  );
}
