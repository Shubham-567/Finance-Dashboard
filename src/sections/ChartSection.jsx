import ChartCard from "@/components/ChartCard";
import React from "react";
import ClientsChart from "@/components/Charts/ClientsChart";
import SipBusinessChart from "@/components/Charts/SipBusinessChart";
import MonthlyMisChart from "@/components/Charts/MonthlyMisChart";

const ChartSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4'>
      <ChartCard title='Clients'>
        <ClientsChart />
      </ChartCard>
      <ChartCard title='Sip Business Chart'>
        <SipBusinessChart />
      </ChartCard>
      <ChartCard title='Monthly Mis'>
        <MonthlyMisChart />
      </ChartCard>
    </section>
  );
};

export default ChartSection;
