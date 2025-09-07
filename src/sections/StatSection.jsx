"use client";

import FilterBar from "@/components/FilterBar";
import StatCard from "@/components/StatCard";
import { Ban, HandCoins, TrendingUp, Wallet, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const StatSection = () => {
  const [stats, setStats] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("3 Days");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/finance/stats");
        const json = await res.json();
        setStats(json);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [selectedFilter]);

  if (!stats) return <div className='p-4'>Loading stats...</div>;

  return (
    <section className='card'>
      {/* Filter Bar */}
      <FilterBar selected={selectedFilter} onSelect={setSelectedFilter} />

      {stats ? (
        <div className='flex max-md:flex-col gap-4 max-lg:divide-y lg:divide-x divide-gray-400'>
          <StatCard
            icon={<HandCoins className='size-10 text-red-400' />}
            title='Purchases'
            value={stats.purchases.value}
            amount={stats.purchases.amount}
          />
          <StatCard
            icon={<Wallet className='size-10 text-red-400' />}
            title='Redemptions'
            value={stats.redemptions.value}
            amount={stats.redemptions.amount}
          />
          <StatCard
            icon={<Ban className='size-10 text-red-400' />}
            title='Rej. Transactions'
            value={stats.rejectedTransactions.value}
            amount={stats.rejectedTransactions.amount}
          />
          <StatCard
            icon={<XCircle className='size-10 text-red-400' />}
            title='SIP Rejections'
            value={stats.sipRejections.value}
            amount={stats.sipRejections.amount}
          />
          <StatCard
            icon={<TrendingUp className='size-10 text-red-400' />}
            title='New SIP'
            value={stats.newSip.value}
            amount={stats.newSip.amount}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default StatSection;
