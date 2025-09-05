"use client";

import Topbar from "@/components/Topbar";
import MainCardSection from "@/sections/MainCardSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <main className='p-4 md:px-8 '>
        <MainCardSection />
      </main>
    </>
  );
}
