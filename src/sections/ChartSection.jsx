import GraphCard from "@/components/ChartCard";
import React from "react";
import ClientsChart from "@/components/Charts/ClientsChart";
import SipBusinessChart from "@/components/Charts/SipBusinessChart";
import MonthlyMisChart from "@/components/Charts/MonthlyMisChart";

const ChartSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4'>
      <GraphCard title='Clients'>
        <ClientsChart />
      </GraphCard>
      <GraphCard title='Sip Business Chart'>
        <SipBusinessChart />
      </GraphCard>
      <GraphCard title='Monthly Mis'>
        <MonthlyMisChart />
      </GraphCard>
    </section>
  );
};

export default ChartSection;
