"use client";

import Topbar from "@/components/Topbar";
import GraphSection from "@/sections/ChartSection";
import MainCardSection from "@/sections/MainCardSection";
import StatSection from "@/sections/StatSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <main id='pdf-content' className='p-4 md:px-8 space-y-4'>
        <MainCardSection />
        <StatSection />
        <GraphSection />
      </main>
    </>
  );
}
