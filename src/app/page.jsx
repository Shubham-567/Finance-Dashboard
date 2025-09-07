"use client";

import Topbar from "@/components/Topbar";
import MainCardSection from "@/sections/MainCardSection";
import StatSection from "@/sections/StatSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <main className='p-4 md:px-8 space-y-4'>
        <MainCardSection />
        <StatSection />
      </main>
    </>
  );
}
