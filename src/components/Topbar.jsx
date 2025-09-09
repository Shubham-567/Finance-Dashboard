"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Search,
  Filter,
  Lightbulb,
  Settings,
  Bell,
  Star,
  Users,
  KeyRound,
  User,
  Lock,
  GraduationCap,
  Play,
  LogOut,
} from "lucide-react";

const navItems = [
  "Home",
  "CRM",
  "Utilities",
  "Insurance",
  "Assets",
  "Mutual",
  "Research",
  "Transact Online",
  "Goal GPS",
  "Financial Planning",
  "Wealth Report",
  "Other",
];

const navIcons = [
  { name: "Filter", icon: Filter },
  { name: "Lightbulb", icon: Lightbulb },
  { name: "Settings", icon: Settings },
  { name: "Bell", icon: Bell },
  { name: "Star", icon: Star },
  { name: "Users", icon: Users },
  { name: "Key", icon: KeyRound },
  { name: "User", icon: User },
  { name: "Lock", icon: Lock },
  { name: "GraduationCap", icon: GraduationCap },
  { name: "Play", icon: Play },
  { name: "LogOut", icon: LogOut },
];

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    alert(`You searched for ${searchQuery}.`);
  };

  return (
    <header className='w-full shadow-md'>
      {/* white navbar */}
      <div className='py-2 px-4 md:px-8 flex items-center justify-between gap-4 md:gap-10'>
        <Image
          src='/logo.png'
          width={80}
          height={80}
          alt='company logo'
          className='w-16 md:w-24 lg:w-28 h-auto'
        />

        {/* search bar */}
        <div className='flex flex-1 items-center bg-[#e5e7eb] dark:bg-card border border-border rounded focus-within:ring-2 focus-within:ring-secondary shadow-lg'>
          <input
            type='text'
            name='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" ? handleSearch() : null;
            }}
            placeholder='Search (eg: Live Portfolio)'
            className='outline-none border-none w-full px-2 py-1 mr-1 bg-transparent'
          />

          <button
            className='bg-background text-txt-primary border-l border-border px-2 py-2 rounded cursor-pointer'
            onClick={handleSearch}>
            <Search className='size-4' />
          </button>
        </div>

        {/* icon bar */}
        <ul className='hidden lg:flex items-center gap-4'>
          {navIcons.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer hover:text-secondary flex items-center gap-2 ${
                item.name === "LogOut" ? "border-l-2 pl-2" : ""
              }`}
              onClick={() => alert(`You clicked ${item.name}.`)}>
              <item.icon className='size-4' />
              {item.name === "LogOut" && (
                <span className='hidden xl:inline'>Logout</span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        <button
          className='lg:hidden'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle navigation menu'>
          {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 overflow-y-scroll h-full w-64 bg-primary text-primary-foreground transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}>
        <div className='sticky top-0 flex justify-between items-center p-4 border-b bg-primary z-10 border-primary-hover'>
          <span className='text-lg font-bold'>Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label='Close menu'>
            <X className='size-6 cursor-pointer hover:bg-primary-hover rounded-full' />
          </button>
        </div>
        <nav className='flex flex-col p-4 space-y-2'>
          {navItems.map((item) => (
            <a
              key={item}
              href='#'
              className='py-2 px-4 rounded hover:bg-primary-hover'
              onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
          <hr className='my-2 border-border' />
          <ul className='flex flex-col space-y-2'>
            {navIcons.map((item) => (
              <li
                key={item.name}
                className='flex items-center gap-2 py-2 px-4 rounded hover:bg-primary-hover cursor-pointer'
                onClick={() => setIsOpen(false)}>
                <item.icon className='size-5' />
                <span>{item.name === "LogOut" ? "Logout" : item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* red navbar - hidden on smaller screens */}
      <nav className='bg-primary text-primary-foreground text-sm lg:text-base hidden lg:flex justify-between items-center gap-4 py-2 px-8'>
        {navItems.map((item) => (
          <a key={item} href='#' className='whitespace-nowrap hover:underline'>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
