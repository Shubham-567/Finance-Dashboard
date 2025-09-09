"use client";

import Topbar from "@/components/Topbar";
import ChartSection from "@/sections/ChartSection";
import MainCardSection from "@/sections/OverviewSection";
import StatSection from "@/sections/StatSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <main id='pdf-content' className='p-4 mb-4 md:px-8 space-y-4'>
        <MainCardSection />
        <StatSection />
        <ChartSection />
      </main>
    </>
  );
}
