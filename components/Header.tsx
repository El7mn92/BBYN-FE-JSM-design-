import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-boubyan-red text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Branding */}
        <div className="flex items-center gap-4">
          <div className="p-1 border-2 border-white/30 rounded cursor-pointer hover:bg-white/10 transition">
             <Menu size={24} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight">Service Portal</h1>
            <span className="text-xs text-red-100 opacity-80 uppercase tracking-wider">Ticketing System</span>
          </div>
        </div>

        {/* Center: Search (Hidden on mobile, visible on md+) */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for services, tickets, or knowledge..."
              className="block w-full pl-10 pr-3 py-2 border-none rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 sm:text-sm shadow-inner"
            />
          </div>
        </div>

        {/* Right: User Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-boubyan-red"></span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
              <User size={18} />
            </div>
            <span className="hidden sm:block text-sm font-medium">Abdulrahman Bin Hussain</span>
          </div>
        </div>
      </div>
    </header>
  );
};