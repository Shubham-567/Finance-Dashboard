"use client";

import OverviewCard from "@/components/CardCard";
import { useEffect, useState } from "react";

const OverviewSection = () => {
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
          <OverviewCard
            title='AUM'
            value={data.aum.value}
            mom={data.aum.mom}
            trend={data.aum.trend}
          />
          <OverviewCard
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

export default OverviewSection;
