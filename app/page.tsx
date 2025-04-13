import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="relative bgg-blue-100 max-w-full w-full flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav
        navItems={[
          { name: "About", link: "#home", icon: <FaHome /> },
          { name: "Skills", link: "#home", icon: <FaHome /> },
          { name: "Projects", link: "#about", icon: <FaHome /> },
          { name: "Contact", link: "#skills", icon: <FaHome /> },
        ]}
      />

      <Hero />
      <Portfolio />
    </main>
  );
}
