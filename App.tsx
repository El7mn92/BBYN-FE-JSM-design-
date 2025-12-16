import React, { useState } from 'react';
import { Header } from './components/Header';
import { RecentActivity } from './components/RecentActivity';
import { LoginPage } from './components/LoginPage';
import { TicketForm } from './components/TicketForm';
import { CATEGORIES, RECENT_ACTIVITY } from './constants';
import { Category, SubService } from './types';
import { ArrowLeft, ChevronRight, Lock } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedService, setSelectedService] = useState<SubService | null>(null);

  // 1. Login Logic
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  // Home View Component
  const HomeView = () => (
    <div className="animate-fade-in">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-800">Hello, Abdulrahman 👋</h2>
        <p className="text-gray-500 mt-1">What do you need help with today?</p>
      </div>

      {/* Main Categories Grid - 2x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className="group relative flex flex-col items-center justify-center p-10 min-h-[280px] bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-200 hover:border-boubyan-red transition-all duration-300 text-center overflow-hidden"
          >
            {category.restricted && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border border-gray-200 z-10">
                <Lock size={12} /> Limited
              </div>
            )}
            
            <div className="h-24 w-24 rounded-3xl bg-gray-50 text-boubyan-red flex items-center justify-center mb-6 group-hover:bg-boubyan-red group-hover:text-white transition-colors duration-300 z-10 shadow-sm group-hover:shadow-md">
              <category.icon size={48} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-boubyan-red transition-colors z-10">
              {category.name}
            </h3>
            
            {/* Watermark Lettering */}
            <span className="text-8xl font-black text-gray-100 absolute -bottom-8 -right-8 opacity-40 select-none group-hover:opacity-10 transition-opacity rotate-[-10deg] scale-150">
                {category.shortName}
            </span>
            
            <p className="text-base text-gray-500 line-clamp-2 max-w-sm z-10">
              {category.description}
            </p>
          </button>
        ))}
      </div>

      {/* Recent Activity Section */}
      <RecentActivity activities={RECENT_ACTIVITY} />
    </div>
  );

  // Detail View Component
  const CategoryView = ({ category }: { category: Category }) => (
    <div className="animate-slide-up">
      {/* Breadcrumb / Back Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <button 
          onClick={() => setSelectedCategory(null)}
          className="hover:text-boubyan-red flex items-center gap-1 transition-colors"
        >
          <ArrowLeft size={16} /> Home
        </button>
        <ChevronRight size={14} />
        <span className="font-medium text-gray-900">{category.name}</span>
      </div>

      {/* Category Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 flex items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-boubyan-red text-white rounded-lg shadow-lg shadow-red-200">
                <category.icon size={32} />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-500">{category.description}</p>
            </div>
        </div>
        <div className="hidden sm:block text-right">
             <div className="text-sm text-gray-400">Services Available</div>
             <div className="text-2xl font-bold text-gray-800">{category.services.length}</div>
        </div>
      </div>

      {/* Services Grid (Distributed by Threes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service) => (
          <div 
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-boubyan-red hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-4">
               <div className="p-2.5 rounded-lg bg-gray-50 text-gray-700 group-hover:bg-red-50 group-hover:text-boubyan-red transition-colors">
                 <service.icon size={24} />
               </div>
               {/* Arrow icon that appears on hover */}
               <ChevronRight className="text-gray-300 group-hover:text-boubyan-red transform group-hover:translate-x-1 transition-all" size={20} />
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-boubyan-red transition-colors">
              {service.name}
            </h4>
            <p className="text-sm text-gray-500 flex-grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedService ? (
          <TicketForm 
            service={selectedService} 
            onBack={() => setSelectedService(null)} 
            onSubmit={() => {
              // Return to category view after submission
              setSelectedService(null);
            }} 
          />
        ) : selectedCategory ? (
          <CategoryView category={selectedCategory} />
        ) : (
          <HomeView />
        )}
      </main>
    </div>
  );
};

export default App;