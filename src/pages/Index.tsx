import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Voeux } from "@/components/Voeux";
import { Souvenirs } from "@/components/Souvenirs";
import { Cadeaux } from "@/components/Cadeaux";
import { Lettre } from "@/components/Lettre";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Voeux />
      <Souvenirs />
      <Cadeaux />
      <Lettre />
      <Contact />
    </main>
  );
};

export default Index;
