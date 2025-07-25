import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Abstract } from "@/components/Abstract";
import { Highlights } from "@/components/Highlights";
import { Architecture } from "@/components/Architecture";
import { Results } from "@/components/Results";
import { Method } from "@/components/Method";
import { Team } from "@/components/Team";
import { Citation } from "@/components/Citation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <Abstract />
      <Highlights />
      <Architecture />
      <Method />
      <Results />
      <Team />
      <Citation />
    </div>
  );
}
