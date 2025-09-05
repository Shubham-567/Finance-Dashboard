"use client";

import MainCard from "@/components/MainCard";
import { useEffect, useState } from "react";

const MainCardSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch("/api/finance/overview");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching overview: ", error.message);
      }
    };

    fetchOverview();
  }, []);

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {data ? (
        <>
          <MainCard
            title='AUM'
            value={data.aum.value}
            mom={data.aum.mom}
            trend={data.aum.trend}
          />
          <MainCard
            title='SIP'
            value={data.sip.value}
            mom={data.sip.mom}
            trend={data.sip.trend}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default MainCardSection;
