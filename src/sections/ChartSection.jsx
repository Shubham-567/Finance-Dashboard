import GraphCard from "@/components/ChartCard";
import React from "react";
import ClientsChart from "@/components/Charts/ClientsChart";

const ChartSection = () => {
  return (
    <section className='flex items-center gap-4'>
      <GraphCard title='Card Heading'>
        <ClientsChart />
      </GraphCard>
      <GraphCard title='Card Heading'></GraphCard>
      <GraphCard title='Card Heading'></GraphCard>
    </section>
  );
};

export default ChartSection;
